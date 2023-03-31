import React from 'react'
import { Button, Dialog, Modal, Portal, Provider, Text } from 'react-native-paper'
import { Image, ScrollView, StyleSheet, View } from 'react-native';

interface Iprops {
    isShow: boolean,
    item: {
        title: string | undefined,
        src: string | undefined,
        context: string | undefined,
    },
    setIsShow: () => void,
}
const ViewStory = (props: Iprops) => {
    const { item } = props;
    const hideDialog = () => {
        props.setIsShow();
    }

    return (
        <Portal>
            <Modal visible={props.isShow} onDismiss={() => props.setIsShow()} contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                </View>
                <View style={styles.body}>
                    <ScrollView style={styles.scroll}>
                        <Image
                            style={styles.image}
                            source={{ uri: item.src }} alt={item.title}
                        />
                        <Text style={styles.content}> {item.context}</Text>
                    </ScrollView>
                </View>
                <View style={styles.button}>
                    <Button onPress={() => props.setIsShow()}>Đóng</Button>
                </View>
            </Modal>
        </Portal>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: '5%',
        marginRight: '5%',
        width: '90%',
        height: '50%',
        backgroundColor: '#fff',
        minHeight: 300,
        borderRadius: 8,
        padding: '2%'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '2%',
    },
    title: {
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    body: {
        flex: 6,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    scroll: {
        paddingHorizontal: 24,
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: 'stretch'
    },
    content: {
        fontSize: 13,
        justifyContent: 'space-between',
    },
    padding_0_margin_0: {
        padding: 0,
        margin: 0,
    }
})

export default ViewStory