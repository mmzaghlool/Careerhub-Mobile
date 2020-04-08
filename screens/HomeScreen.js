import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Progress from 'react-native-progress/Circle';
import LinearGradient from 'react-native-linear-gradient';
import Style, { iphoneBottomPadding, iphoneTopPadding } from '../common/Style';
import { updateUser } from '../common/User';
import { API_LINK } from '../common/Constants';

const { width } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    }
  }

  async componentDidMount() {
    let user = await this.props.navigation.state.params.user;
    this.setState({ user, ...user }, () => this.getData())
    console.log('user Profile', user);
    
    

    user = await updateUser();
    if (user) {
      this.setState({user, ...user})
      console.log('user updated:', user);
    }
    
  }

  async getData() {
    const { user } = this.state
    console.log('user updated:', user);

    await fetch(`${API_LINK}/groups/${user.uid}`)
      .then(res => res.json())
      .then(res => {
        console.log('get groups res: ', res);
        const { success, data, message } = res;

        if (success) {
          let listData = []; 

          for (const key in data) {
            const element = data[key];
            const myProgress = 0.5
            listData.push({
              ...element,
              myProgress
            });
          }

          this.setState({ listData })
          
        } else {
          console.log('get groups success = false: ', message);
          
        }
      })
      .catch(err => {
        console.log('get groups err: ', err);
      })

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
      <TouchableOpacity style={styles.item}
        onPress={() => this.props.navigation.navigate('Group')}
      >
        {/* <View style={StyleSheet.bigIcon}> */}
        <LinearGradient
          colors={['#9D76F3', '#7264ED', '#7466Ef']}
          style={styles.gradient}>
          <View
            style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: 5}}
          >
            <Text style={[styles.listIcons, { fontWeight: 'bold', fontSize: 22 }]}>{item.instructor}</Text>
            <Progress
              showsText={true}
              progress={item.myProgress}
              thickness={7}
              size={60}
              color="#ffffff"
              textStyle={styles.styleText}
            />
          </View>

          <Text style={styles.listIcons}>{item.title}</Text>
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
            renderItem={({ item }) => this.renderListIcons(item)}
            keyExtractor={(item, index) => `${index}`}
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
            {this.renderFooterIcon('email', 'Messages', () => { })}
            {this.renderFooterIcon('account', 'Profile', () => { this.props.navigation.navigate('Profile', { user: this.state.user }) })}
            {this.renderFooterIcon('bell-ring', 'Notifications', () => { })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? iphoneTopPadding : 0
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
    paddingBottom: Platform.OS === 'ios' ? iphoneBottomPadding : 10
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
    fontSize: 23,
    color: 'white',
  },
  item: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  gradient: {
    flex: 1,
    padding: 25,
    borderRadius: 30,
  },
  styleText: {
    fontSize: 15,
  },
});
