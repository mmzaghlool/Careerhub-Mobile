import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Progress from 'react-native-progress/Circle';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        {name:'Machine Learning' , progress:'0.75'},
        {name:'Mobile Developing' , progress:'0.5'},
        {name:'Web Developing' , progress:'0.25'},
        {name:'Desktop Developing' , progress:'0.75'},
    
       ]
    }
  }

  async componentDidMount() {
    const user = await this.props.navigation.state.params.haz;
    this.setState({totuser:user})
    console.log('user Profile', user);
    this.setState({ ...user })
    console.log('stste',this.state)
  }
  renderFooterIcon(icon, text, onPress) {
    return (
      <TouchableOpacity
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onPress={onPress}>
        <View style={styles.iconContainer}>
          <Icon name={icon} size={45} color="#37324D" />
        </View>

        <Text style={styles.footerIconText}>{text}</Text>
      </TouchableOpacity>
    );
  }

  renderListIcons(item) {
    return (
      <TouchableOpacity style={styles.item}>
        {/* <View style={StyleSheet.bigIcon}> */}
        <LinearGradient
          colors={['#9D76F3', '#7264ED', '#7466Ef']}
          style={styles.gradient}>
          <View
            style={{
              alignSelf: 'flex-end',
            }}>
            <Progress
              showsText={true}
              progress={item.progress}
              thickness={7}
              size={60}
              color="#ffffff"
              textStyle={styles.styleText}
            />
          </View>

          <Text style={styles.listIcons}>{item.name}</Text>
        </LinearGradient>
        {/* </View> */}
      </TouchableOpacity>
    );
    
    
  
  }
   
  render() {
    const { listData } = this.state;
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.textContainer}>
          <Text style={styles.headerText1}>Hey  {this.state.firstName + ' ' + this.state.lastName}</Text>
          <Text style={styles.headerText2}>-Your tracks</Text>
        </View>

        {/* List */}
        <View style={styles.listContainer}>
          {/* {this.renderListIcons('Machine Learning', 0.75)}
          {this.renderListIcons('Mobile Developing', '.50')}
          {this.renderListIcons('Web Developing', '.10')} */}
          <FlatList
            data={listData}
            extraData={this.state}
            renderItem={({item}) => this.renderListIcons(item)}
            
          />
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerLine}>________</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            {this.renderFooterIcon('email', 'Messages', () => {})}
            {this.renderFooterIcon('account', 'Profile', () => {this.props.navigation.navigate('Profile',{user:this.state.totuser})})}
            {this.renderFooterIcon('bell-ring', 'Notifications', () => {})}
          </View>
        </View>
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
