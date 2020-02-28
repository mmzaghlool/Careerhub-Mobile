import React from 'react';
import {
    View,
    Text,
    FlatList,
    AsyncStorage,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import TestButton from '../components/testbutton';
import firebase from 'react-native-firebase';
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
const { height, width } = Dimensions.get('window')
import CheckBox from 'react-native-check-box'


const API = 'https://lit-plateau-32534.herokuapp.com';

export default class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 0, level: 'LEVEL ONE', checked: false },
                { id: 1, level: 'LEVEL TWO', checked: false },
                { id: 2, level: 'LEVEL THREE', checked: false },
                    { id: 3, level: 'LEVEL FOUR', checked: false }
            ],
            j:0,
            x:0,
            checked: []
        }

    }

    componentDidMount() {

    }

    renderItems = ({ item, index }) => (


        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 50, marginTop: 30 }}>
 
            <Text style={{ flex: .5, fontSize: 19, fontWeight: 'bold', color: 'white', alignSelf: 'flex-start' }}>{item.level}</Text>
            <CheckBox
                style={{ alignSelf: 'center', marginRight: 50 }}
                onClick={() => {


                    this.checkThisBox(item.id);
                    this.count()
                }}
                isChecked={this.state.data[item.id].checked}

            />
           
        </View>

    )
    checkThisBox = (itemID) => {
        let { data, checked} = this.state
        data[itemID].checked = !data[itemID].checked

        const index = checked.lastIndexOf(itemID);
        let newArr = [];
        
        if (index === -1) {
            checked.push(itemID)
        } else {
            
            checked.forEach(element => {
                if (element !== itemID) {
                    newArr.push(element);
                }
            });
            checked = newArr;
        }

        this.setState({ data: data, checked })
    }
    count = () => {
       let { data, checked} =this.state;
        const percent = Math.ceil((checked.length/data.length) * 100)        
        this.setState({ j: percent })
}
     
    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', marginTop: 30, justifyContent: 'space-between' }}>
                 
                <TouchableOpacity style={{ flex: .18, }}>
                <LinearGradient
          colors={['#9D76F3', '#7264ED', '#7466Ef']}
          //colors={['#0e1f35', '#21455c']}
          
          style={styles.gradient}>
              
                    <Text style={{ fontSize: 28, color: 'white' }}>Chat</Text>
                    <Icon name='chat' color='white' size={38} />

            </LinearGradient>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ justifyContent: 'space-around', flexDirection: 'row', flex: .18, backgroundColor: '#4e446f', width: width * .8, borderRadius: 30, alignItems: 'center' }}
                    onPress={() => this.props.navigation.navigate('Community')}
                >
                    <LinearGradient
          colors={['#9D76F3', '#7264ED', '#7466Ef']}
          //colors={['#0e1f35', '#21455c']}
          
          style={styles.gradient}>
                    <Icon name='people' color='white' size={42} />
                    <Text style={{ fontSize: 28, color: 'white' }}>Community</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={{ justifyContent: 'space-around', flexDirection: 'row', flex: .18, backgroundColor: '#4e446f', width: width * .8, borderRadius: 30, alignItems: 'center' }}>
                <LinearGradient
          colors={['#9D76F3', '#7264ED', '#7466Ef']}
          //colors={['#0e1f35', '#21455c']}
          
          style={styles.gradient}>
                    <Text style={{ fontSize: 28, color: 'white' }}>Members</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{ flex: .35, borderTopRightRadius: 25, borderTopLeftRadius: 25,width:width }}>
                    <ScrollView>
                <LinearGradient
          colors={['#9D76F3', '#7264ED', '#7466Ef']}
          //colors={['#0e1f35', '#21455c']}
          
          style={styles.gradient2}>
                    <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 15 }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white' }}>Your Progress</Text>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white' }}>{this.state.j}%</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                        <Progress.Bar progress={
                         this.state.j / 100
                        } width={270} color={'#a9a0c5'} unfilledColor={'white'} height={15} borderRadius={10} />
                    </View>
                    {/* <Text style={{ flex:.5,fontSize: 19, fontWeight: 'bold', color: 'white' }}>LEVEL 1</Text>
                        <Text style={{ flex:.5,fontSize: 19, fontWeight: 'bold', color: 'white' }}>LEVEL 2</Text>
                        <Text style={{ flex:.5,fontSize: 19, fontWeight: 'bold', color: 'white' }}>LEVEL 3</Text> */}
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        disableVirtualization={true}
                        renderItem={this.renderItems}
                    />
    </LinearGradient>
    </ScrollView>
                </View>

            </View>

        )



    }
}
const styles = StyleSheet.create({
    gradient: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
        justifyContent: 'space-around', flexDirection: 'row', width: width * .8, borderRadius: 30, alignItems: 'center' 
      },
     

});

