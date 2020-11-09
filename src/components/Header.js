import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { color } from '../../Constants';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Today</Text>

            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => alert('Pressed!')}>
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
