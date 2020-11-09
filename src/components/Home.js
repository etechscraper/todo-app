import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './Header';
import Todos from './Todos';

const Home = () => {
    const [todo, addTodo] = useState();

    return (
        <View>
            <Header addTodo={addTodo} />
            <Todos todo={todo}/>
        </View>
    )
}

export default Home;
