import React, { Component } from "react";
import './App.css';
import Header from './Components/Header'
import BookList from "./Components/BookList";
import Shelf from "./Components/Shelf";
import data from "./data";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  constructor(){
    super();
    this.state ={
      data,
      shelf: [],
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }

  addToShelf(){
    this.state.shelf.push();
    console.log('Clicked!')
  }

  clearShelf(){
    this.setState({ shelf: []})
  }

  filterBooks(input){
    let filteredBooks = this.state.books.filter((elem)=> {
      return elem.includes(input)
    })
    this.setState({books:filteredBooks})
  }

  reset(){

  }
  

  render(){
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="searchBar">
          <SearchBar 
          filterBooks={this.filterBooks}
          reset={this.reset}
          />
        </div>
        <div className='container'>
          <section className='bookList'>
            <BookList
            books={this.state.data}
            addToShelf={this.addToShelf}
            />
          </section>
          <section className='shelf'>
            <Shelf 
            shelf={this.state.shelf}
            clearShelf={this.clearShelf}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
