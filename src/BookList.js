import React from 'react';

const BookList = (props) => {
  return (
    <div>
      <h3>Book List</h3>
      <ul>
        {props.books.map((book, index) => (
          <li key={index}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
