import React from "react";
import { useBox } from "../../contexts/BoxContext";

function Box() {
  const { box } = useBox();
  return (
    <ul>
      {box.map((item) => (
        <li key={item.id}>
          {item.title}- ${item.price}
        </li>
      ))}
    </ul>
  );
}

export default Box;
