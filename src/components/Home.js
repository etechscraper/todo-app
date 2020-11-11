import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './Header';
import TodosHooks from './TodosHooks';
import TodosRedux from './TodosRedux';

const Home = () => {
  const [todo, addTodo] = useState();

  return (
    <View>
      <Header addTodo={addTodo} />

      {/* Todos component using HOOKS */}
      {/* <TodosHooks todo={todo}/> */}

      {/* Todos component using REDUX */}
      <TodosRedux />
    </View>
  );
};

export default Home;
