import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';


export const ProfileName = ({ name, time, image }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 7
    }} >
        <Image
            source={require('../../assets/icons/images.jpg')}
            style={{ borderRadius: 30, width: 50, height: 50 }}
        />

        <View style={{
            marginHorizontal: 7
        }} >
            {/* Name */}
            <Text style={{ fontSize: 18, fontWeight: '600' }} >
                {name}
            </Text>

            {/* Time */}
            <Text >
                {time}
            </Text>
        </View>
    </View>
)
