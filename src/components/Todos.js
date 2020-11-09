import React, { useEffect } from 'react';
import { ScrollView, FlatList } from 'react-native';
import TodoItem from './TodoItem';

const todos = [
    {id: 1, item: 'Start making presentation', status: true},
    {id: 2, item: 'Buy Milk', status: false},
    {id: 3, item: 'Pay rent', status: false}
];

const addTodo = (todo) => {
    todos.push({id: todos.length + 1, item: todo, status: false})
}

const Todos = (props) => {

    useEffect(() => {
        props.todo && addTodo(props.todo);
    }, [props.todo]);

    return (
        <ScrollView>
            <FlatList
                data={todos}
                extraData={props}
                renderItem={({item}) => <TodoItem todo={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </ScrollView>
    )
}

export default Todos;
