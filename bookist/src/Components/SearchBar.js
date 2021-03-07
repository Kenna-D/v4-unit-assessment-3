import React, { Component } from "react";

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      userInput: ''
    }
  };

  handleChange(value){
    this.setState({ userInput: value });
  };

  handleClick(){
    this.filterBooks(this.state.userInput)
  };

  handleClear(){

  };

 render(){
   return(
     <div className='search'>
       <input
          value={this.state.userInput} 
          placeholder='Seach Books' 
          onChange={e => this.handleChange(e.target.value)}
        />
        <button onClick={this.handleClick}>Search</button>
        <button>Clear Search</button>
     </div>
   )
 };
}

export default SearchBar