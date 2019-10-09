import { Todo, Modals } from '../../../models';

export enum TodoTypes {
  ADD_TODO = '@todo/ADD_TODO',
  EDIT_TODO = '@todo/EDIT_TODO',
  DELETE_TODO = '@todo/DELETE_TODO',
  TOGGLE_MODAL = '@todo/TOGGLE_MODAL'
}

export interface TodoReducerState {
  readonly todos: Todo[];
  readonly modals: Modals;
}
