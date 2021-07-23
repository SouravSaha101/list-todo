import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Todolist from "./components/TodoList/Todolist";

function App() {
  const [todo, setTodo] = useState([]);
  const [totdoInput, setTodoInput] = useState("");
  const handleAddTodo = () => {
    const todoObj = {
      id: todo[todo.length - 1]?.id + 1 || 1,
      isEdit: false,
      value: totdoInput,
      isChecked: false,
    };
    setTodo([...todo, todoObj]);
    setTodoInput("");
  };

  const editCheckHandler = useCallback(
    (value, id) => {
      const newTodo = [...todo];
      newTodo.map((e) => (e.id === id ? (e.isEdit = value) : e));
      setTodo(newTodo);
    },
    [todo]
  );
  const checkHandler = useCallback(
    (value, id) => {
      const newTodo = [...todo];
      newTodo.map((e) => (e.id === id ? (e.isChecked = value) : e));
      setTodo(newTodo);
    },
    [todo]
  );
  const deleteHandler = useCallback(
    (id) => {
      console.log(id);
      const newTodo = todo.filter((e) => e.id !== id);
      setTodo(newTodo);
    },
    [todo]
  );

  const editSaveHandler = useCallback(
    (value, id) => {
      const newTodo = [...todo];
      newTodo.map((e) => {
        if (e.id === id) {
          e.value = value;
          e.isEdit = false;
        }
        return e;
      });
      setTodo(newTodo);
    },
    [todo]
  );
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header"> Todo List</h1>
        <h6>Your Complete list of Todo </h6>
      </header>
      <hr />
      <input
        className="input-add"
        value={totdoInput}
        onChange={(e) => setTodoInput(() => e.target.value)}
        placeholder="Enter Todo"
      />
      <button className="button-add" onClick={handleAddTodo}>
        Add Todo
      </button>
      <hr />
      <Todolist
        todoList={todo}
        editChecked={editCheckHandler}
        deleteChecked={deleteHandler}
        checkClicked={checkHandler}
        editSaveClicked={editSaveHandler}
      />
    </div>
  );
}

export default App;
