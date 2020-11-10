import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';
import useAddTodo from '../hooks/useAddTodo';

const TodosHooks = (props) => {
  const todoList = useAddTodo(props.todo);

  return (
    <FlatList
      data={todoList}
      extraData={props}
      renderItem={({ item }) => <TodoItem todo={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TodosHooks;
