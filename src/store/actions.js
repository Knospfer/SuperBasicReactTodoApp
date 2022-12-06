export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "UPDATE_TODO";

export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}

export function updateTodo(payload) {
  return { type: UPDATE_TODO, payload };
}

export function deleteTodo(payload) {
  return { type: DELETE_TODO, payload };
}
