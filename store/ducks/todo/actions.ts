import { TodoTypes } from './types';
import { Todo } from '../../../models';

export const addTodo = (payload: Todo) => ({
  type: TodoTypes.ADD_TODO,
  payload
});

export const toggleCreateModal = () => ({
  type: TodoTypes.TOGGLE_MODAL
});

export const editTodo = (payload: Todo) => ({
  type: TodoTypes.EDIT_TODO,
  payload
});

export const deleteTodo = (payload: number) => ({
  type: TodoTypes.DELETE_TODO,
  payload
});
