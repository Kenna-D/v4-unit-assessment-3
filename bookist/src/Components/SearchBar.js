import React, { Component } from "react";

class SearchBar extends Component{
  constructor (){
    super();
    this.state ={
      userInput: ''
    }
  }

  handleInputChange(value){
    this.setState({ userInput: value })
  }
  handleClick(){
    this.props.filterBooks(this.userInput)
  }

  render(){
    return (
      <div>
        <input
          value={this.state.userInput} 
          placeholder='Seach Books' 
          onChange={e => this.handleInputChange(e.target.value)}
        />
        <button onClick={this.handleClick}>Search</button>
        <button>Clear Search</button>
      </div>
    )
  }
}

export default SearchBar