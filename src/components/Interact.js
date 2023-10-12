export default function Interact({ children, onClickHandler }) {
  return (
    <div>
      <h2 onClick={onClickHandler}>Interact Component</h2>
      <p>{children}</p>
    </div>
  );
}
