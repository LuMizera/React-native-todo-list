import { Reducer } from 'redux';
import { TodoReducerState, TodoTypes } from './types';
import { Modals } from '../../../models';

const INITIAL_MODALS: Modals = {
  isCreateOpen: false
};

const INITIAL_STATE: TodoReducerState = {
  todos: [],
  modals: INITIAL_MODALS
};

const reducer: Reducer<TodoReducerState> = (state = INITIAL_STATE, action) => {
  const editItem = () => {
    const newArray = state.todos;
    const index = newArray.findIndex(item => item.id === action.payload.id);
    newArray[index] = action.payload;
    return newArray;
  };

  const deleteItem = () => {
    const newArray = state.todos;
    return newArray.filter(item => item.id !== action.payload);
  };

  switch (action.type) {
    case TodoTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TodoTypes.EDIT_TODO:
      return {
        ...state,
        todos: editItem()
      };
    case TodoTypes.DELETE_TODO:
      return {
        ...state,
        todos: deleteItem()
      };
    case TodoTypes.TOGGLE_MODAL:
      return {
        ...state,
        modals: { ...state.modals, isCreateOpen: !state.modals.isCreateOpen }
      };
    default:
      return state;
  }
};

export default reducer;
