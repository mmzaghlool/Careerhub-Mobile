import React from "react";
import { View, ActivityIndicator, Text } from "react-native";

export default function Spinner(props) {
 
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        }} >
            <ActivityIndicator size="large" color="#382d4b" />
            <Text>Loading...</Text>
        </View>
    )
}