import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ProfileName } from './ProfileName';
import { API_LINK } from '../../common/Constants';
import Header from '../../common/Header';

import Style from '../../common/Style';
import Spinner from '../../common/Loading';
import { object } from 'prop-types';
import firebase from 'react-native-firebase';

export default class Post extends Component {
    constructor() {
        super()
        this.state = {

            spinner: true,
        }
    }

    async componentDidMount() {
        await fetch(`${API_LINK}/community/123`)
            .then(res => res.json())
            .then(async res => {
                console.log('resresres', res);
                if (res.success) {

                    let x = JSON.parse(res.data)
                    let y = x.hits.hits
                    console.log(y[0]._source);
                    let posts = []
                    y.forEach(element => {
                        posts.push(element)
                        this.setState({ posts, spinner: false }, console.log('p', posts))

                    });
                    this.setState({ image: y[0]._source.images[0] }, () => console.log(this.state.image))

                }


            })
            .catch(err => { alert(err) })
    }

    renderItems = ({ item, index }) => (
        <View style={{ marginBottom: 10 }}  >

            <ProfileName name={item._source.name} time={"2hrs ago"} />
            <Text style={{ margin: 7 }}>{item._source.text}</Text>

            {/* {/* <FlatList
              data={this.state.images}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              disableVirtualization={true}
              renderItem={ (item) => 
            */}
            <Image
                style={{
                    alignSelf: 'center', width: 300,
                    height: 300,
                }}
                source={{ uri: this.state.image }}
            />


            {/* footer icons */}
            <View style={{ flexDirection: 'row', marginTop: 10 }} >
                <Icon icon={'thumb-up-outline'} onPress={ async() => {

                   await  fetch(`${API_LINK}/community/${item._type}/${item._id}`, {
                        method: "PUT",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({
                            uid:firebase.auth().currentUser.uid
                        })
                    }).then(res => res.json())
                        .then(res => {
                            console.log('reg res', res);
                            
                        })
                        .catch(err => {
                            console.log('reg err', err);
                           
                        })
                }} num={item._source.likes} />
                <Icon icon={'comment-text-multiple-outline'} onPress={() => this.props.openComments()} num={30} />
            </View>

        </View>
    )



    render() {
        console.log('ddd', this.state.image);
        const { spinner } = this.state;
        if (spinner) {
            return <Spinner />
        } else {
            return (


                <View style={[{
                    margin: 7,
                    padding: 10,
                    backgroundColor: 'white',
                    borderRadius: 12
                }, Style.elevation]}>
                    <FlatList
                        data={this.state.posts}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.FlatListItemSeparator}
                        disableVirtualization={true}
                        renderItem={this.renderItems}
                    />

                </View>

            );
        }
    }
}

const Icon = ({ icon, onPress, num }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ padding: 3 }} onPress={onPress} >
                <MaterialCommunityIcons name={icon} size={30} color='#795EE3' />
            </TouchableOpacity>

            <Text style={{ fontSize: 20, textAlignVertical: 'center', margin: 5 }} >
                {num}
            </Text>
        </View>
    )
}