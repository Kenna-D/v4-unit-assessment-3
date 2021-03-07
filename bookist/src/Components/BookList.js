import React from "react";

const BookList = (props) => {
  let mappedBooks = props.books.map((elem) => <div className='bookAndTitle'>
      <img src={elem.img} />
      <br/>
      <h3 className='title' onClick={props.addToShelf(elem.title)} >{elem.title}</h3>
      {/* <br/> */}
      <h3 className='lable'>{elem.author}</h3>
    </div>);

  
  return(
    <div className='individualBooks'>
      {(mappedBooks)}
    </div>
  );
  
}


export default BookList