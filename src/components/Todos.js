import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
  // useContext helps to use the context stored values
  const todoContext = useContext(TodoContext);
  console.log(todoContext);
    const { todos } = todoContext;
  return (
    <div className="todo">
      <TodoInput/>
      <ul className="todo-body">
       <TodoList todoData={todos}/>
      </ul>
    </div>
  );
};

export default Todos;
