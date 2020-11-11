import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

const TodosRedux = (props) => {
  return (
    <FlatList
      data={props.todoList}
      extraData={props}
      renderItem={({ item }) => <TodoItem todo={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todos,
  };
};

export default connect(mapStateToProps)(TodosRedux);
