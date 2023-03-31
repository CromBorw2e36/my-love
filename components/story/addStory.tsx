import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AddStory = () => {
    return (
        <View style={styles.addStory}>
            <TouchableOpacity>
                <MaterialCommunityIcons name="plus-circle" size={64} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    addStory: {
        marginBottom: 30,
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default AddStory