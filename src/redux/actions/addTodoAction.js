import { ADD_TODO } from '../types/types';

export const addTodo = (inputValue) => {
    return {
        type: ADD_TODO,
        inputValue
    }
}
