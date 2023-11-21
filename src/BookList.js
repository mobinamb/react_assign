import React from 'react';

const BookList = ({ books, onRemoveBook }) => {
  return (
    <div>
      <h3>Book List</h3>
      <ul>
        {books.map((book, index) => (
          book.title && book.author && (
            <li key={index}>
              {book.title} by {book.author}
              <button onClick={() => onRemoveBook(book.id)}>X</button>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default BookList;
