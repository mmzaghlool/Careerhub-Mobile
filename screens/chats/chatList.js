import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Progress from 'react-native-progress/Circle';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'react-native-firebase';
import { API_LINK} from '../../common/Constants';
import { set, forIn } from 'lodash';

const { width } = Dimensions.get('window');
const id = firebase.auth().currentUser.uid
export default class HomeScreen extends React.Component {
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

  async componentDidMount() {
    let x = firebase.auth().currentUser.uid
    this.setState({x})
   await fetch(`${API_LINK}/chat/list/${x}`)
      .then(res => res.json())
      .then(async res => {
        console.log('resresres', res);
        if (res.success) {
            for (const uid in res.data) {
                if (res.data.hasOwnProperty(uid)) {
                    console.log(res.data.hasOwnProperty(name));
                    const element = res.data[uid];
                    console.log('ss',element);
                    let x = [];
                    x.push({'uid':uid , ...element})
                    console.log('x',x);
                    this.setState({list:x})
                    console.log(this.state.list);
                                }
            }


        }

      })
      .catch(err => { })
  }
 

  renderItems = ({ item, index }) => (


    <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this.props.navigation.navigate('Chat', { roomkey:item.roomKey  ,rec :item.uid })}>
        <Image source={{ uri: item.avatar }} style={{
                            borderRadius: 50,
                            width: 50,
                            height: 50,
                            marginHorizontal: 5
                        }} />
      <Text style={{ marginTop: 8, fontSize: 17, fontWeight: 'bold', marginBottom: 20, marginLeft: 9 }}>{item.name}</Text>
                    
      
     

    </TouchableOpacity>

  )



  
  render() {
    return (

      <View style={styles.container}>
           <FlatList
              data={this.state.list}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              disableVirtualization={true}
              renderItem={this.renderItems}
            />
            
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText1: {
    fontSize: 24,
    color: '#37324D',
    marginBottom: 2,
  },
  headerText2: {
    fontSize: 20,
    color: '#37324D',
  },
  textContainer: {
    padding: 12,
  },
  footerContainer: {
    backgroundColor: '#37324D',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    width: '100%',
    height: '17%',
  },
  listContainer: {
    flex: 1,
  },
  footerLine: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 5,
  },
  footerIconText: {
    fontSize: 13,
    color: 'white',
    textAlign: 'center',
    marginTop: 3,
  },
  iconContainer: {
    width: width * 0.15,
    height: width * 0.15,
    backgroundColor: 'white',
    borderRadius: width * 0.075,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // bigIcon: {
  //   width: '30%',
  //   height: '30%',

  //   borderRadius: 5,
  // },
  listIcons: {
    fontSize: 25,
    color: 'white',
  },
  item: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  gradient: {
    width: '100%',
    // height: '100%',
    padding: 25,
    borderRadius: 25,
  },
  styleText: {
    fontSize: 15,
  },
});
