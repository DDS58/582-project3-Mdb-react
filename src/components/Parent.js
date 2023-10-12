import Child from "./Child";
const testArray = ["one", "two", "three"];
const testArrayOfObjects = [
  { id: 1, name: "one", items: [1, 2, 3] },
  { id: 2, name: "two", items: [1, 5, 3] },
  { id: 3, name: "three", items: [1, 4, 3] },
  { id: 4, name: "four", items: [1, 2, 4] },
  { id: 5, name: "five", items: [1, 2, 7] },
  { id: 6, name: "six", items: [1, 2, 8] },
];

function Parent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child className="props-class" />
      {testArray.map((item, index) => {
        return <Child key={index} name={item} />;
      })}
      {testArrayOfObjects.map((item) => {
        return <Child key={item.id} obj={item} />;
      })}
    </div>
  );
}

export default Parent;
