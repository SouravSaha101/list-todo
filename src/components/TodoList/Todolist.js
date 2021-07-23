import React from "react";
import { FaEdit, FaSave, FaTrash } from "react-icons/fa";

function Todolist({
  todoList,
  editChecked,
  deleteChecked,
  checkClicked,
  editSaveClicked,
}) {
  const [input, setInput] = React.useState("");
  const enabledStyle = {
    backgroundColor: "lightgreen",
    cursor: "not-allowed",
  };
  const diabledStyle = {
    backgroundColor: "red",
  };
  console.log(todoList);
  return (
    <div>
      {todoList.map((todolist) => (
        <div
          key={todolist.id}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <input
            style={{ height: "34px", width: "29px" }}
            type="checkbox"
            onChange={(e) => {
              checkClicked(e.target.checked, todolist.id);
            }}
            checked={todolist.isChecked}
            disabled={todolist.isEdit}
          />
          {todolist?.isEdit ? (
            <>
              <textarea
                className="input-add"
                value={input ? input : todolist.value}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="button"
                className="button-add"
                onClick={(e) => editSaveClicked(input, todolist.id)}
              >
                <FaSave />
              </button>
            </>
          ) : (
            <>
              <input
                className="input-add"
                style={todolist.isChecked ? enabledStyle : diabledStyle}
                value={todolist.value}
                disabled
              />
              <button
                type="button"
                className="button-add"
                onClick={(e) => editChecked(true, todolist.id)}
                disabled={todolist.isChecked}
              >
                <FaEdit />
              </button>
            </>
          )}

          <button
            type="button"
            className="button-add"
            onClick={(e) => deleteChecked(todolist.id)}
            disabled={todolist.isChecked}
          >
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
}

export default React.memo(Todolist);
