import { Todo, FetchTodoAction, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: FetchTodoAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
