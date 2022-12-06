import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";

const initialState = {
  todoList: [
    {
      id: "1",
      name: "Item 1",
      description: "Lorem ipsum dolor sit ament",
    },
    {
      id: "2",
      name: "Item 2",
      description: "Lorem ipsum dolor sit ament",
    },
    {
      id: "3",
      name: "Item 3",
      description: "Lorem ipsum dolor sit ament",
    },
  ],
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
