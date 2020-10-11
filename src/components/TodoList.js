import React, { useContext } from "react";
import { TodoContext } from "./../context/TodoProvider";

const TodoList = ({ todoData }) => {
  const todoContext = useContext(TodoContext);
  const { deleteTodo, setTodo, completeTodo } = todoContext;
  return (
    <>
      {todoData.map((todo) => (
        <li key={todo.id}>
          {/* <span className="material-icons" onClick={() => setTodo(todo)}>edit</span> */}
          {todo.completed ? (
            <span></span>
          ) : (
            <span className="material-icons" onClick={() => setTodo(todo)}>
              edit
            </span>
          )}

          <span
            className={`${todo.completed ? `completed` : `null`}`}
            onClick={() => completeTodo(todo.id)}
          >
            {todo.title}
          </span>

          <span className="material-icons" onClick={() => deleteTodo(todo.id)}>
            delete_outline
          </span>
        </li>
      ))}
    </>
  );
};

export default TodoList;
