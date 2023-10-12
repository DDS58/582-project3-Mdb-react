function Child(props) {
  function onClickHandler(e) {
    console.log(`Clicked on ${props.name || props.obj.name}`, e.target);
  }

  return (
    <div className={props.className ? props.className : "default-class"}>
      {/* <h3>Child Component</h3> */}
      {/* <p>{props.name}</p> */}
      {props.name ? (
        <h3 onClick={onClickHandler}>Name: {props.name}</h3>
      ) : (
        <p>No name passed</p>
      )}
      {props.obj ? (
        <>
          <h3 onClick={onClickHandler}>
            Object: {props.obj.id} - {props.obj.name}
          </h3>
          {/* <p>{props.obj.items}</p> */}
        </>
      ) : (
        <p>No object passed</p>
      )}
    </div>
  );
}

export default Child;
