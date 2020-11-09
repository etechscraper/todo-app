import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, TextInput } from 'react-native';
import { color } from '../../Constants';

const addTodo = (props, inputValue) => {
    props.addTodo(inputValue);
    props.setModalVisibility(false);
}

const AddTodo = (props) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.modalHeaderText}>Add Todo</Text>

                <TextInput 
                    style={styles.input}
                    multiline={true}
                    numberOfLines={4}
                    defaultValue={inputValue}
                    onChangeText={inputValue => setInputValue(inputValue)}
                />
                
                <View style={styles.actions}>
                    <TouchableHighlight underlayColor="transparent" onPress={() => props.setModalVisibility(false)}>
                        <Text style={styles.link}>Close</Text>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor="transparent" onPress={() => addTodo(props, inputValue)}>
                        <Text style={styles.link}>Done</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        width: Dimensions.get('window').width - 80,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalHeaderText: {
        fontSize: 20,
        fontWeight: '700'
    },
    input: {
        marginVertical: 20,
        borderColor: color.gray,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    link: {
        fontSize: 15,
        color: color.blue
    }
});

export default AddTodo;
