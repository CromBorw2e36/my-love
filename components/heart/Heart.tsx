import { StyleSheet, Text, View } from "react-native/";

const Heart = () => {
    return (
        <View style={styles.heart}>
            <View style={[styles.leftHeart, styles.heartShape]} />
            <View style={[styles.rightHeart, styles.heartShape]} />
            <View style={styles.days}>
                <Text style={[styles.daysTitle]}>NaN</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    heart: {
        width: 150,
        height: 150,
    },
    heartShape: {
        width: 90,
        height: 135,
        position: "absolute",
        top: 0,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        backgroundColor: "#FFB6B9",
    },
    leftHeart: {
        transform: [{ rotate: "-45deg" }],
        left: 13.5,
    },
    rightHeart: {
        transform: [{ rotate: "45deg" }],
        right: 13.5,
    },
    days: {
        position: 'absolute',
        top: 50,
        transform: [{ translateY: -20 }],
        justifyContent: 'center',
        alignItems: 'center',
        width: 150

    },
    daysTitle: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#FFFFFF',
    }
});

export default Heart;