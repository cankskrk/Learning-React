import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Todo() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div>
      <div className="d-flex justify-content-center bg-dark p-5">
        <Input
          className="border border-3 border-top-0 border-start-0 border-end-0 border-warning bg-dark text-light me-2"
          type="text"
          value={inputText}
          onChange={handleChange}
        />
        <Button
          className="btn-warning ms-2"
          name="Add"
          type="button"
          click={addItem}
        />
      </div>
      <div className="d-flex justify-content-center bg-dark text-primary">
        <ul>
          {items.map((todoItem, i) => (
            <li key={i}>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
