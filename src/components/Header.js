import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableHighlight, Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { color } from '../../Constants';
import AddTodoHooks from './AddTodoHooks';
import AddTodoRedux from './AddTodoRedux';

const Header = (props) => {
    const [modalVisible, setModalVisibility] = useState(false);

    return (
        <View style={styles.header}>
            <Modal 
                visible={modalVisible} 
                animationType={"slide"}
                transparent={true}
            >
                {/* <AddTodoHooks setModalVisibility={setModalVisibility} addTodo={props.addTodo} /> */}
                <AddTodoRedux setModalVisibility={setModalVisibility} />
            </Modal>

            <Text style={styles.headerText}>Today</Text>

            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="transparent"
                onPress={() => setModalVisibility(true)}>
                <AntDesign name={'pluscircleo'} size={30} color={color.blue} />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 20
    },
    headerText: {
        fontSize: 30,
        fontWeight: '700'
    }
});

export default Header;
