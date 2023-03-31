import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Heart from '../components/heart/Heart'

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Image
                    style={styles.image}
                    source={require("../publics/images/750ab7249dad46f31fbc.jpg")}
                />
                <Text style={styles.text}>Khánh Khánh</Text>
            </View>
            <View style={styles.date}>
                <Text>Đã yêu được</Text>
                <Heart />
                <Text>Ngày</Text>
            </View>
            <View style={styles.avatar}>
                <Image
                    style={styles.image}
                    source={require("../publics/images/3eeec4c0ee4935176c58.jpg")}
                />
                <Text style={styles.text}>Cát Tường</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#B0DAFF"
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
    },
    date: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 75
    },
    heart: {
        width: 50,
        height: 50,
    },
    heartShape: {
        width: 30,
        height: 45,
        position: "absolute",
        top: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: "#6427d1",
    },
    leftHeart: {
        transform: [{ rotate: "-45deg" }],
        left: 5,
    },
    rightHeart: {
        transform: [{ rotate: "45deg" }],
        right: 5,
    },
})

export default Home