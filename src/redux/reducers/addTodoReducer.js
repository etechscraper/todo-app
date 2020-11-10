import { ADD_TODO } from '../types/types';

const initialTodos = {
  todos: [
    { id: 1, item: 'Start making presentation', status: true },
    { id: 2, item: 'Buy Milk', status: false },
    { id: 3, item: 'Pay rent', status: false },
  ],
};

const addTodoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state.todos,
        { id: state.todos.length + 1, item: 'hihi', status: false },
      ];

    default:
      return state;
  }
};

export default addTodoReducer;
