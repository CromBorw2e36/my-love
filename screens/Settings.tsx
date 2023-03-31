import React from 'react'
import { Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import Heart from '../components/heart/Heart'

const Settings = () => {
    return (
        <View  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large"/>
        </View>

    )
}

export default Settings