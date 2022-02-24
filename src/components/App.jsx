import React, { useState } from "react";
import TodoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newText = event.target.value;
    setInputText(newText);
  }

  function addItem() {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <TodoItem text={todoItem}/>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
