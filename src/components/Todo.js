import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Todo() {
  const [list, setList] = useState([]);

  const handleInput = (event) => {
    const { value } = event.target;
    let newList = [...value];
    return newList;
  };

  const addListItem = () => {
    setList([...newList]);
  };

  return (
    <div className="d-flex justify-content-center bg-dark p-5">
      <Input
        className="border border-3 border-top-0 border-start-0 border-end-0 border-warning bg-dark text-light me-2"
        placeholder=""
        type="text"
        name="item"
        onChange={handleInput}
      />
      <Button className="btn-warning ms-2" name="Add" type="button" />

      <div className="d-flex align-items-center">
        <ul>
          {list.map((item) => {
            <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
