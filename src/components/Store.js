import { useState } from "react";
const names = [
  "Gene Patton",
  "Dorothy Jimenez",
  "Ernest Medina",
  "Ruth Fletcher",
  "Kyle Nguyen",
  "Norman Hayes",
];

export default function Store() {
  const [name, setName] = useState("John Doe");

  function handleNameChange(e) {
    console.log(names[e.target.dataset.id]);
    setName(names[e.target.dataset.id]);
  }

  return (
    <div>
      <h2>Store</h2>
      <p>Name: {name}</p>
      <ul>
        {names.map((name, index) => {
          return (
            <li data-id={index} key={index} onClick={handleNameChange}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
