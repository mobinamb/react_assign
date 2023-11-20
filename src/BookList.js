import React from 'react';

const BookList = ({ books, onRemoveBook }) => {
  return (
    <div>
      <h3>Book List</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author}
            <button onClick={() => onRemoveBook(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
