import React from "react";

function ListItem({ key, name, onChecked, id }) {
  //   const [isDone, setIsDone] = useState(false);

  //   const click = () => {
  //     setIsDone((prev) => {
  //       return !prev;
  //     });
  //   };

  return (
    <div>
      <li
        // style={{ textDecoration: isDone ? "line-through" : "none" }}
        onClick={onChecked(id)}
        key={key}
      >
        {name}
      </li>
    </div>
  );
}

export default ListItem;
