import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import TodoItem from './TodoItem';

const todos = [
    {id: 1, item: 'Start making presentation', status: true},
    {id: 2, item: 'Buy Milk', status: false},
    {id: 3, item: 'Pay rent', status: false}
];

const Todos = () => {
    return (
        <ScrollView>
            <FlatList
                data={todos}
                renderItem={({item}) => <TodoItem todo={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </ScrollView>
    )
}

export default Todos;
