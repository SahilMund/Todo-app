import React, { createContext, useReducer } from "react";

import {
  GET_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SET_TODO,
  COMPLETE_TODO,
} from "./constants";

export const TodoContext = createContext();

//------------------------------------------------ Reducers------------------------------------------------------
const todoReducers = (state, action) => {
  switch (action.type) {
    case CREATE_TODO :
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case DELETE_TODO :
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };
    // for update we need to get data first
    case SET_TODO :
      return {
        ...state,
        currentTodo: action.payload,
      };
    //  then after getting the data we need to update it
    case UPDATE_TODO :
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id == action.payload.id ? action.payload : todo
        ),
      };
    case COMPLETE_TODO :
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id == action.payload
            ? Object.assign(todo, { completed: true })
            : todo
        ),
      };
    default:
      return state;
  }
};

const TodoProvider = (props) => {
  const initialState = {
    todos: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
      },
    ],
    currentTodo: null,
  };

  // useReducer(<reducers>,<state(initial)>) it retuns state and dispatch function
  const [state, dispatch] = useReducer(todoReducers, initialState);

  // ------------------------------------------------------------ACTIONS-------------------------------------------------------------
  const createTodo = (todo) => {
    dispatch({
      type: CREATE_TODO,
      payload: todo,
    });
  };
  const deleteTodo = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };
  // ----------update action------------
  const setTodo = (todo) => {
    dispatch({
      type: SET_TODO,
      payload: todo,
    });
  };
  const updateTodo = (todo) => {
    dispatch({
      type: UPDATE_TODO,
      payload: todo,
    });
  };
  const completeTodo = (id) => {
    dispatch({
      type: COMPLETE_TODO,
      payload: id,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        currentTodo: state.currentTodo,
        createTodo,
        completeTodo,
        deleteTodo,
        setTodo,
        updateTodo,
      }}
    >
      {props.children}
      {/* props.children :- It helps to execute the App.js code inside TodoProvider i.e. children code of  TodoProvider */}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
