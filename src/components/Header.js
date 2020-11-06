import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { color } from '../../Constants';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Today</Text>
            <AntDesign name={'pluscircleo'} size={30} color={color.blue} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20
    },
    headerText: {
        fontSize: 30,
        fontWeight: 700
    }
});

export default Header;
