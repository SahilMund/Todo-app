import React, { useState, useContext, useEffect ,useRef} from "react";
import { TodoContext } from "./../context/TodoProvider";
import shortid from "shortid";


const TodoInput = () => {
  const inputRef = useRef();
  const todoContext = useContext(TodoContext);
  const { createTodo, currentTodo ,updateTodo} = todoContext;
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (currentTodo) {
      setTitle(currentTodo.title);
      //  for focusing to the input
      inputRef.current.focus()
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
   if(currentTodo){
    const updated_Todo = {
      id: currentTodo.id,
      title,
      completed: currentTodo.completed,
    };
    
    updateTodo(updated_Todo);
   }else{
    const new_Todo = {
      id: shortid.generate(),
      title,
      completed: false,
    };
    
    createTodo(new_Todo);
   }
    setTitle("");
    inputRef.current.blur();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          className={`todo-input ${currentTodo != null ? `update` : null}`}
          placeholder="Enter your todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={inputRef}
        />
      </form>
    </div>
  );
};

export default TodoInput;
