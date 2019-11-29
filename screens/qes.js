import React from 'react';
import {
    View,
    Text,
    FlatList,
    AsyncStorage,
    Dimensions
  } from 'react-native';
  import TestButton from '../components/testbutton';


  
  const API = 'https://lit-plateau-32534.herokuapp.com';

  export default class Qes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       

         data:  [
            { question: 'I enjoy television shows about animals and nature ', answer: '' },
            { question: '1-I enjoy television shows about animals and nature ', answer: '' },
            { question: '2-I like having pets / I love animals', answer: '' },
            { question: '3-I feel alive when I come in contact with nature', answer: '' },
            { question: '4-I enjoy camping, hiking, walking and climbing', answer: '' },
            { question: '5-I enjoy nature walks in scenic places', answer: '' },
            { question: '6-I love music and have my favorite singers and musical groups', answer: '' },
            { question: '7-I can easily remember new songs', answer: '' },
            { question: '8-I notice and enjoy different sound', answer: '' },
            { question: '9-Singing is a great joy for me', answer: '' },
         
          ] 
      }

    }
  
    componentDidMount() {
      fetch(`${API}/users/getQuestions`)

    }

  
    
    renderItems = ({ item, index }) => (
      

      <View style={{}}>
        <Text style={{ marginTop: 8, fontSize: 17, fontWeight: 'bold', marginBottom: 20, marginLeft: 9 }}>{item.question}</Text>
        
        <TestButton  index={index} onSelected={(ans,index) => {
                   var x = JSON.stringify(ans)
                    for(let i =0 ; i<9;i++){
                      if(i==index)
                     {this.state.data.splice(index,0,ans)}
                    }
                    for(let i =0 ; i<9;i++){
                     console.log(this.state.data[index])
                     }
         
            }} />
      </View>

    )


    render() {
     
      return (
        <View style={{}}>
          <FlatList
            data={this.state.data}
            keyExtractor={ (item, index) => index.toString() }
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            disableVirtualization={true}
            renderItem={this.renderItems}
          />
        </View>
  
      )
  
  
  
    }
  }