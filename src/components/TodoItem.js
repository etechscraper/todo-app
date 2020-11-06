import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color } from '../../Constants';

const TodoItem = (props) => {
    return (
        <View style={styles.todo}>
            <Text style={styles.todoText}>{props.todo.item}</Text>
            <View style={[styles.status, {backgroundColor: props.todo.status ? color.green : color.red}]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomColor: color.gray,
        borderBottomWidth: 1,
    },
    todoText: {
        fontSize: 16,
    },
    status: {
        width: 10,
        height: 10,
        borderRadius: 5
    }
});

export default TodoItem;
