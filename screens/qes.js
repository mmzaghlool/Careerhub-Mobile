import React from 'react';
import {
  View,
  Text,
  FlatList,
  AsyncStorage,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import TestButton from '../components/testbutton';
import firebase from 'react-native-firebase';
import { API_LINK } from '../common/Constants';

import LinearGradient from 'react-native-linear-gradient';


const API = 'https://lit-plateau-32534.herokuapp.com';

export default class Qes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


      data: [
        { question: 'I enjoy television shows about animals and nature ', answer: '', strength: 'naturalist', id: 0, },
        { question: '1-I enjoy television shows about animals and nature ', answer: '', strength: 'naturalist', id: 1 },
        { question: '2-I like having pets / I love animals', answer: '', strength: 'musical', id: 2 },
        { question: '3-I feel alive when I come in contact with nature', answer: '', strength: 'musical', id: 3 },
        { question: '4-I enjoy camping, hiking, walking and climbing', answer: '', strength: 'logical', id: 4 },
        { question: '5-I enjoy nature walks in scenic places', answer: '', strength: 'logical', id: 5 },
        { question: '6-I love music and have my favorite singers and musical groups', answer: '', strength: 'interpersonal', id: 6 },
        { question: '7-I can easily remember new songs', answer: '', strength: 'interpersonal', id: 7 },
        { question: '8-I notice and enjoy different sound', answer: '', strength: 'Kinesthetic', id: 8 },
        { question: '9-Singing is a great joy for me', answer: '', strength: 'Kinesthetic', id: 9 },
        { question: '10-I organize things by category', answer: '', strength: 'verbal', id: 10 },
        { question: '11-I have good coordination and motor skills', answer: '', strength: 'verbal', id: 11 },
        { question: '12-I easily remember quotes and famous sayings', answer: '', strength: 'interpersonal', id: 12 },
        { question: '13-I am good at knowing what others are feeling', answer: '', strength: 'interpersonal', id: 13 },
        { question: '14-I notice colors and shapes', answer: '', strength: 'visual', id: 14 },
        { question: '15-I am able to picture things clearly in my head', answer: '', strength: 'visual', id: 15 },

      ],
    }

  }

  componentDidMount() {
    // fetch(`${API}/users/getQuestions`)
    firebase.database().ref('/questions').once('value', snap => {
      const data = snap.val();
      this.setState({ data })
    })

  }



  renderItems = ({ item, index }) => (


    <View style={{}}>

      <Text style={{ marginTop: 8, fontSize: 17, fontWeight: 'bold', marginBottom: 20, marginLeft: 9 }}>{item.question}</Text>

      {/* <TestButton index={index} onSelected={(ans, index) => {
        var x = JSON.stringify(ans)
        for (let i = 0; i < 9; i++) {
          if (i == index) { this.state.data.splice(index, 0, ans) }
        }
        for (let i = 0; i < 9; i++) {
          console.log(this.state.data[index])
        }

      }} /> */}
      <TestButton answer={item.answer} index={index} onSelected={(type) => {
        this.changeAns(item.question, type)
      }} />

    </View>

  )
  _keyExtractor = (item, index) => item.id;

  changeAns(question, answer) {
    for (var i in this.state.data) {
      if (this.state.data[i].question == question) {
        this.state.data[i].answer = answer;
        break; //Stop this loop, we found it!
      }
    }
  }


  render() {

    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#5653e2', '#795EE3', '#ae71f2']}
          style={styles.linearGradient}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 27, marginTop: 15, color: 'white', marginTop: 20 }}>PERSONALITY TEST</Text>

          <View style={styles.dynamicScreen}>
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              disableVirtualization={true}
              renderItem={this.renderItems}
            />

          </View>
          <TouchableOpacity style={{ marginBottom: 10, flex: .05, borderRadius: 30, marginTop: 9, width: '70%', marginLeft: 52, flexDirection: 'column' }}
            onPress={ async() => {
              let res = {
                naturalist: 0,
                musical: 0,
                logical: 0,
                visual: 0,
                interpersonal: 0,
                kinesthetic: 0,
                verbal: 0

              }

              for (let i = 0; i < this.state.data.length; i++) {
                const element = this.state.data[i];
                // console.log('element', element)
                let strength = res[element.strength];


                if (element.answer == 'Never') { strength += 0 }
                else if (element.answer == 'Rarely') { strength += .25 }
                else if (element.answer == 'Often') { strength += .75 }
                else if (element.answer == 'Always') { strength += 1 }

                // console.log('strength', strength)
                res[element.strength] = strength
                
              }
              let x =firebase.auth().currentUser.uid

              await fetch(`${API_LINK}/users/answersOfQuestions/${x}`, {
                method: "POST",
                headers: {
                  'Content-Type': "application/json"
                },
                body: JSON.stringify({
                answers: {
                  Naturalist : res.naturalist,
                  Musical:res.musical,
                  Logical:res.logical,
                  Interpersonal:res.interpersonal,
                  Kinesthetic:res.kinesthetic,
                  Verbal:res.verbal,
                  Visual:res.visual
                }
                })
              }).then(res => res.json())
                .then(res => {

                  console.log('reg res', res);

                })
                .catch(err => {
                  console.log('reg err', err);

                })
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={['#5653e2', '#795EE3', '#862deb']}
              style={styles.linearGradient2}>
              <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 9 }}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </View>

    )



  }
}
const styles = StyleSheet.create({

  dynamicScreen: {
    backgroundColor: 'white',
    marginTop: 10,
    height: '80%',
    borderRadius: 18,
    flex: .95

  },
  linearGradient: {

    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: '100%'
  },
  linearGradient2: {

    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    height: 40

  }

});

