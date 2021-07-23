import React, { useState, useEffect, useCallback, useRef } from "react";
import "./App.css";
import Todolist from "./components/TodoList/Todolist";

function App() {
  const [todo, setTodo] = useState([]);
  let input = useRef();
  const [totdoInput, setTodoInput] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoObj = {
      id: todo[todo.length - 1]?.id + 1 || 1,
      isEdit: false,
      value: totdoInput,
      isChecked: false,
    };
    setTodo([...todo, todoObj]);
    localStorage.setItem("todo", JSON.stringify(todo));
    setTodoInput("");
    input.current.focus();
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
  useEffect(() => {
    let storedTodoList = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    setTodo(storedTodoList);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header"> Todo List</h1>
        <h6>Your Complete list of Todo </h6>
      </header>
      <hr />
      <form onSubmit={handleAddTodo}>
        <input
          className="input-add"
          value={totdoInput}
          onChange={(e) => setTodoInput(() => e.target.value)}
          placeholder="Enter Todo"
          ref={input}
          required
        />
        <input
          type="submit"
          className="button-add"
          value="Add Todo"
          // disabled={!totdoInput}
        />
      </form>
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
