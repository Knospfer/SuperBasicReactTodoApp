import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";

const initialState = {
  todoList: [],
};

export function rootReducer(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return { ...state, todoList: [...state.todoList, action.payload] };
  }
  if (action.type === UPDATE_TODO) {
    const { index, newTodo } = action.payload;
    return { ...state, todoList: state.todoList.splice(index, 1, newTodo) };
  }
  if (action.type === DELETE_TODO) {
    return { ...state, todoList: state.todoList.splice(action.payload, 1) };
  }

  return state;
}
