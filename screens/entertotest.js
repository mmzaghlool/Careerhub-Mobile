import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('window')


export default class EnterToTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <LinearGradient
          colors={['#5653e2', '#795EE3', '#ae71f2']}
          style={styles.linearGradient}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 27, marginTop: 15, color: 'white', marginTop: 20 }}>PERSONALITY TEST</Text>

          <View style={styles.dynamicScreen}>


            <View style={{ padding: 0, marginTop: 38, flexDirection: 'column' }}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>We can suggest a tips and a suitable</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>career for you based on some</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>questions which you are going to</Text>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>answer it</Text>
              <Image
                style={{ marginLeft: 66, width: width*.7, height: height*.5, alignItems: 'stretch', justifyContent: 'center', marginTop: 65 }}
                source={require('../assets/icons/icon.jpeg')}
              />

            </View>

          </View>
        <TouchableOpacity style={{ flex: .03, borderRadius: 30, marginTop: 15, width: width*.7, marginLeft: 45, flexDirection: 'column' }}
          onPress={() => { this.props.navigation.navigate('Qes') }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#5653e2', '#795EE3', '#862deb']}
            style={styles.linearGradient2}>
            <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 7}}>Next</Text>
          </LinearGradient>
        </TouchableOpacity>
        </LinearGradient>

      </View>
    );

  }
}
const styles = StyleSheet.create({

  dynamicScreen: {
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 18,
    flex: .9

  },
  linearGradient: {

    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: height
  },
  linearGradient2: {

    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,

  }

});




