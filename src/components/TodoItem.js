import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { color } from '../../Constants';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TodoItem = (props) => {
    const [ status, setstatus ] = useState(props.todo.status);

    return (
        <View style={styles.todoContainer}>
            <TouchableHighlight onPress={() => setstatus(!status)} color='transparent' underlayColor={'transparent'}>
                { status
                    ? <AntDesign name={'checkcircle'} size={28} color={color.green} style={styles.checkIcon} />
                    : <Entypo name={'circle'} size={28} color={color.gray} style={styles.checkIcon} />
                }
            </TouchableHighlight>

            <View style={styles.todo}>
                <Text style={[styles.todoText, {textDecorationLine: status ? 'line-through' : 'none'}]}>{props.todo.item}</Text>
                <View style={[styles.status, {backgroundColor: status ? color.green : color.red}]}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    todo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderBottomColor: color.gray,
        borderBottomWidth: 1,
    },
    todoText: {
        fontSize: 16,
    },
    status: {
        width: 12,
        height: 12,
        marginHorizontal: 20,
        borderRadius: 6
    },
    checkIcon: {
        marginHorizontal: 10
    }
});

export default TodoItem;
