import React from "react";
import TodoProvider from "./context/TodoProvider";
import "./style/App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <div className="App">
          <Todos />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
