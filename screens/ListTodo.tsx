import React from 'react'
import { Alert, FlatList, Keyboard, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import AddToDo from '../components/add-todo/AddToDo';
import ItemToDo from '../components/item-todo/ItemToDo';

const ListTodo = () => {

    const [todoList, setTodoList] = React.useState<string[]>([]);

    const [todo, setTodo] = React.useState<string>("");

    const handleChangeInput = (text: string) => {
        setTodo(text);
    }

    const submit = () => {
        setTodoList([todo, ...todoList]);
        setTodo("");
    }


    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss;
            }}
        >
            <View style={{ flex: 1 }}>
                <AddToDo handleChangeInput={handleChangeInput} submit={submit} text={todo}/>
                <FlatList
                    contentContainerStyle={{ flexGrow: 1, alignItems: "center"}}
                    data={todoList}
                    renderItem={({ item }) => (
                        <ItemToDo key={item} item={{ id: item, title: item, status: false }} />
                    )}
                />
            </View>
        </TouchableWithoutFeedback >
    )
}

export default ListTodo