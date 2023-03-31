import React from 'react'
import { Alert, FlatList, Keyboard, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import AddStory from '../components/story/addStory';
import Story from '../components/story/Story';
import { Provider } from 'react-native-paper';

const Storys = () => {



    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss;
            }}
            style={{justifyContent: 'center', alignItems: 'center'}}
        >
            <Provider>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Câu chuyện của chúng ta</Text>
                    </View>
                    <ScrollView style={styles.bodyStory}>
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <Story />
                        <AddStory />
                    </ScrollView>
                </View>
            </Provider>
        </TouchableWithoutFeedback >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#B0DAFF'
    },
    header: {
        alignItems: 'center',
        paddingTop: '10%',
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    bodyStory: {
        paddingTop: '3%',
        width: '100%',
    }
})

export default Storys