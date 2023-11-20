import React from 'react';

const BookList = () => {
  // Define an array of books
  const books = [
    { title: 'Squire', author: 'Nadia Shammas' },
    { title: 'Sisters of the Snake', author: 'Sasha Nanua' },
    { title: 'Beyond the End of the World', author: 'Amie Kaufman' }
  ];

  return (
    <div>
      <h3>Book List</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
