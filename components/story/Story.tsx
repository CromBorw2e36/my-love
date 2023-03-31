import React from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewStory from './viewStory';
import { Provider } from 'react-native-paper';

const Story = () => {
    const [isShow, setIsShow] = React.useState(false);
    const item = {
        title: "Ngày 12 tháng 10 năm 2022",
        src: 'https://top10lamdong.vn/wp-content/uploads/2022/10/anh-da-lat-3.jpg',
        context: "Ngày mà chúng ta cùng nhau đi du lịch lần đầu tiên"

    }
    return (
        <>
            {
                React.useMemo(() => {
                    return <ViewStory isShow={isShow} setIsShow={() => setIsShow(!isShow)} item={item} />
                }, [isShow])
            }
            <View style={styles.story}>
                <View style={styles.title}>
                    <MaterialCommunityIcons style={styles.icon} name="camera" size={18} color={'#B0DAFF'} />
                    <Text style={styles.date}>{item.title}</Text>
                </View>
                <View style={styles.bodyStory}>
                    <TouchableOpacity onPress={() => setIsShow(true)}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.src }} alt={item.title}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    story: {
        marginBottom: 30,
        width: '92%',
        height: 250,
        paddingLeft: '4%',
    },
    title: {
        flex: 1,
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: '5%',
    },
    icon: {
        borderRadius: 75,
        backgroundColor: '#fff',
        padding: 5,
    },
    date: {
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',

    },
    bodyStory: {
        width: '100%',
        flex: 5,
        paddingLeft: '5%',
        elevation: 14
    },
    image: {
        borderRadius: 20,
        height: '100%',
        width: '100%',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.23,
        shadowRadius: 11.27,
        resizeMode: 'cover'
    }

})

export default Story