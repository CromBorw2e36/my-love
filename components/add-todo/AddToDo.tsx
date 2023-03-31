import React from 'react'
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
interface IProps {
    text:string;
    handleChangeInput: (text: string) => void;
    submit: () => void;
}
const AddToDo = (props: IProps) => {

    return (
        <View style={styles.addTodo} >
            <View style={{width: '80%', justifyContent: 'center', alignItems: 'center'}}>
                <TextInput
                    label="my to do..."
                    onChangeText={(text: string) => props.handleChangeInput(text)}
                    style={styles.textInput}
                    value={props.text}
                />
                <Button
                    mode='contained'
                    onPress={() => props.submit()}
                    style={styles.buttonSubmit}
                >
                    ADD
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addTodo: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        marginBottom: 10,
        width: '100%',
    },
    buttonSubmit: {
        width: '40%',
    }
})

export default AddToDo