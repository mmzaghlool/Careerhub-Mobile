import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../common/Header';
import  { Component } from 'react';
import StarRating from 'react-native-star-rating';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          starCount: 3.5
        };
      }
     
      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }

    render() {
    return (
      
      <ScrollView>
      <Header backButton title="Course" />
         <Image
          style={{ width: 150, height: 150,justifyContent:"center" }}
           //source={require('./assets/rn-school-logo.png')}
          source={{ uri: 'https://images.unsplash.com/photo-1540759786422-c60d5dc57d7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=570bd0585a4b1b7b27c818f42e98b671&auto=format&fit=crop&w=350&q=80' }}
        />

        
        {this.renderRow('Udemy')}
        {this.renderRow('Web development')}
        {this.renderRow('English')}
        {this.renderRow('the only course you need to learn web develop...')}
        {this.renderRow('the web developer bootcamp')}
        {this.renderRow('4.6')}
        
        <StarRating
          disabled={false}
          maxStars={5}
          rating={this.state.starCount}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          starSize={25}
          buttonStyle={5}
        />
        </ScrollView>
    );
  }
  renderRow = text => {
    return (
      <View>
        <Text
          style={{ 
            
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            padding: 12,
            fontSize: 24,
            color: '#37324D',
            marginLeft:15, 
             marginTop:15,
             marginBottom: 15,
             marginEnd:15,
             paddingEnd:15,
             borderRadius:25,
             backgroundColor:'#9D76F3',
          }}>
          {text}
        </Text>
      </View>
    );
  }
}
