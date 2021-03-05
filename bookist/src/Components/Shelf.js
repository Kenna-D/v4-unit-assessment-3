import React, { Component } from "react";

const Shelf = (props) => {
  const {shelf, clearShelf} = props
  return (
    <div>
      <h2>My Shelf</h2>
      <ul>{shelf.map(elem => <li>{elem.title}</li>)}</ul>
      <button onClick={props.clearShelf}>Clear Shelf</button>
    </div>
  )
}

export default Shelf