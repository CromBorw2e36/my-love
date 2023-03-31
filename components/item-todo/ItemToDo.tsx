import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

interface IProps {
    item: {
        id: string | undefined;
        title: string | undefined;
        status: boolean | undefined;
    }
}

const ItemToDo = (props: IProps) => {
    const { item } = props;
    return (
        <TouchableOpacity>
            <View style={styles.itemTodo}>
                <Text>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemTodo: {
        padding: 5,
        fontSize: 14,
        textAlign: 'center',
        border: '1px solid #333',
        width: "80%",
        backgroundColor: "pink",
        marginTop: 10,
        borderRadius: 7,
        minWidth: 300,
    }
})

export default ItemToDo;