import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';

const todos = [
  { id: 1, item: 'Start making presentation', status: true },
  { id: 2, item: 'Buy Milk', status: false },
  { id: 3, item: 'Pay rent', status: false },
];

const Todos = (props) => {
  const [todoList, setTodoList] = useState(todos);

  useEffect(() => {
    props.todo &&
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, item: props.todo, status: false },
      ]);
  }, [props.todo]);

  return (
    <FlatList
      data={todoList}
      extraData={props}
      renderItem={({ item }) => <TodoItem todo={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Todos;
