import React, { Component } from "react";

class Shelf extends Component{

render(){
  let mappedTitles = this.props.shelf.map(elem => <div>{elem}</div>);

  return (
    <div>
      <h2>My Shelf</h2>
      <div>{(mappedTitles)}</div>
      <button onClick={() => this.props.clearShelf}>Clear Shelf</button>
    </div>
  );
}
}
export default Shelf