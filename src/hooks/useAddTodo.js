import { useState, useEffect } from 'react';

const todos = [
  { id: 1, item: 'Start making presentation', status: true },
  { id: 2, item: 'Buy Milk', status: false },
  { id: 3, item: 'Pay rent', status: false },
];

function useAddTodo(todo) {
  const [todoList, setTodoList] = useState(todos);

  useEffect(() => {
    todo &&
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, item: todo, status: false },
      ]);
  }, [todo]);

  return todoList;
}

export default useAddTodo;
