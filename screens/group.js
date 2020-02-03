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
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
const { height, width } = Dimensions.get('window')
import CheckBox from 'react-native-check-box'


const API = 'https://lit-plateau-32534.herokuapp.com';

export default class Qes extends React.Component {
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
            x:0
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
                    this.count(item.id)
                }}
                isChecked={this.state.data[item.id].checked}

            />



        </View>

    )
    checkThisBox = (itemID) => {
        let data = this.state.data
        data[itemID].checked = !data[itemID].checked
        this.setState({ data: data })
    }
    count = (id) => {
       let data =this.state.data
       let f = 1/data.length;
       if(data[id].checked){
           
           this.state.j=this.state.j+f
           this.state.x=parseInt(this.state.x+f*100)
           
       }
       else {
           this.state.j=this.state.j-f
           this.state.x=parseInt(this.state.x-f*100)
           
       }
            }
     
    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', marginTop: 30, justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ justifyContent: 'space-around', flexDirection: 'row', flex: .18, backgroundColor: '#4e446f', width: width * .8, borderRadius: 30, alignItems: 'center' }}>
                    <Text style={{ fontSize: 28, fontFamily: 'SEASRN__', color: 'white' }}>Chat</Text>
                    <Icon name='chat' color='white' size={38} />


                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'space-around', flexDirection: 'row', flex: .18, backgroundColor: '#4e446f', width: width * .8, borderRadius: 30, alignItems: 'center' }}>
                    <Icon name='people' color='white' size={42} />
                    <Text style={{ fontSize: 28, fontFamily: 'SEASRN__', color: 'white' }}>Community</Text>


                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: 'space-around', flexDirection: 'row', flex: .18, backgroundColor: '#4e446f', width: width * .8, borderRadius: 30, alignItems: 'center' }}>
                    <Text style={{ fontSize: 28, fontFamily: 'SEASRN__', color: 'white' }}>Members</Text>


                </TouchableOpacity>
                <TouchableOpacity style={{ flex: .35, backgroundColor: '#4e446f', width: width, borderTopRightRadius: 25, borderTopLeftRadius: 25 }}>
                    <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: 15 }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white' }}>Your Progress</Text>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white' }}>{this.state.x}%</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                        <Progress.Bar progress={
                         this.state.j
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


                </TouchableOpacity>

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

{/* <FlatList
    data={packages}
    extraData={this.state}
    keyExtractor={this._keyExtractor}
    renderItem={({ item }) => (
        <ListItem>
            <CheckBox style={{ marginRight: width * 0.05 }}
                checked={selected == item.id}
                onPress={() => {

                    console.log(selected, "---------", item);
                    console.log(this.state);
                    this.setState({ selected: item.id })
                }}
            />
            <Body>
                <Text>{item.name}</Text>
            </Body>
        </ListItem>
    )}
/> */}