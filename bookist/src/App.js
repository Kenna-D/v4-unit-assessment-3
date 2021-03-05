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
      books: data,
      shelf: []
    }

    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
  }

  filterBooks(input){
    let filteredBooks = this.state.books.filter(input)
    this.setState({books:filteredBooks})

  }

  addToShelf(){
    this.state.shelf.push()
  }

  clearShelf(){
    this.state.shelf.reset()
  }

  reset(){
    this.setState({books: data})
  }

  render(){
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="searchBar">
          <SearchBar filterBooks={this.state.filterBooks}
          reset={this.state.reset}
          />
        </div>
        <div className='container'>
          <section className='bookList'>
            <BookList 
            books={this.state.books} 
            addToShelf={this.state.addToShelf}
            />
          </section>
          <section className='shelf'>
            <Shelf  
            shelf={this.state.shelf}
            clearShelf={this.state.clearShelf}
          />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
