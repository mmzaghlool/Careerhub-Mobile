import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image ,FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ProfileName } from './ProfileName';
import { API_LINK } from '../../common/Constants';
import Header from '../../common/Header';

import Style from '../../common/Style';
import Spinner from '../../common/Loading';

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
            this.setState({post:res.message}, () => console.log(this.state.post))
            if (res.success) {
                // for (const uid in res.data) {
                //     if (res.data.hasOwnProperty(uid)) {
                //         const element = res.data[uid];
                //         let x = [];
                //         x.push({...element})
                //         console.log(x);
                //         this.setState({list:x})
                //                     }
                // }
               await this.setState({post:res.message}, () => this.setState({spinner:false}))

    
            }

    
          })
          .catch(err => { alert(err)})
      }
     
      renderItems = ({ item, index }) => (
<View style={{marginBottom:10}}  >

                <ProfileName name={"Mostafa Mahmoud"} time={"2hrs ago"} />
        <Text style={{ margin: 7 }}>{item}</Text>

                <Image
                    style={{ marginTop: 7, width: '100%', flexShrink: 1 }}
                    source={require('../../assets/icons/images.jpg')}
                />

                {/* footer icons */}
                <View style={{ flexDirection: 'row', marginTop: 10 }} >
                    <Icon icon={'thumb-up-outline'} onPress={() => { }} num={30} />
                    <Icon icon={'comment-text-multiple-outline'} onPress={() => this.props.openComments()} num={50} />
                </View>
            </View>
      )
    render() {
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
              data={this.state.post}
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