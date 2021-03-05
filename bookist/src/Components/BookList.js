import React from "react";

const BookList = (props) => {
  const {books} = props
  let mappedBooks = books.map(elem => <div> <img src='props.books.img' onClick={props.addToShelf}/> <p>{props.books.title}</p> <p>{props.books.author}</p></div> )

  
  return(
    <div>
      {[mappedBooks]}
    </div>
  )
  
}

export default BookList