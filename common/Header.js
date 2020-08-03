import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux'
import Style from './Style';

export default class Header extends Component {
  render() {
    const { backButton, title, style, onBackPress, icon } = this.props;
    return (
      <View
        style={[
          {
            backgroundColor: '#795EE3',
            width: '100%',
            flexDirection: 'row',
            elevation: 7,
            justifyContent: 'center',
            alignItems: 'center',
            // zIndex: 50,
          },
          Style.elevation,
          {...style},
        ]}
      >
        <StatusBar backgroundColor="#795EE3" barStyle='dark-content' />
        {/* back button */}
        {backButton && (
          <TouchableOpacity style={{ flex: 1 }} onPress={onBackPress? onBackPress: Actions.pop()}>
            <MaterialIcons
              name={icon? icon: 'arrow-back'}
              size={25}
              style={{
                color: 'white',
                alignSelf: 'flex-start',
                margin: 10,
              }}
            />
          </TouchableOpacity>
        )}
        {/* Title */}
        {title ? (
          <Text
            style={{ fontSize: 22, margin: 10, textAlign: 'center', flex: 2,
               color: 'white', fontWeight: '700'}}
          >
            {title}
          </Text>
        ) : (
          <View style={{ flex: 1 }} />
        )}
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}
