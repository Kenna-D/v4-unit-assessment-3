import React from "react";

const Shelf = (props) => {
  let mappedTitles = props.shelf.map(elem => <div>{elem.title}</div>);

  return (
    <div>
      <h2>My Shelf</h2>
      <div>{(mappedTitles)}</div>
      <button onClick={props.clearShelf}>Clear Shelf</button>
    </div>
  );
}

export default Shelf