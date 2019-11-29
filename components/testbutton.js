import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default class TestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      answer: ''
    }

  }

  componentDidMount() {
    this.setState({ answer: this.props.answer })

    console.log('props: ', this.props);

  }

  renderAns(answerType) {
    const { answer } = this.state;
    return (
      <TouchableOpacity style={{ width: 120, borderRadius: 25, borderWidth: 2.5, borderColor: '#ae71f2', backgroundColor: answer === answerType ? "#ae71f2" : 'white' }}
        onPress={() => {
          this.setState({ answer: answerType })
          this.props.onSelected(this.state.answer,this.props.index)
        }}>
        <Text style={{ paddingVertical: 3, paddingHorizontal: 3, textAlign: 'center', fontSize: 20, color: 'black' }}>
          {answerType}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

          {this.renderAns("Never")}
          {this.renderAns("Rarely")}
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>

          {this.renderAns("Often")}
          {this.renderAns("Always")}
        </View>
      </View>
    );

  }
}