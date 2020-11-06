import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import Todos from './Todos';

const Home = () => {
    return (
        <View >
            <Header />
            <Todos />
        </View>
    )
}

export default Home;
