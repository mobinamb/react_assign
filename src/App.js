import React, { useState } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm'; // You will create this component in the next step

function App() {
  // Initialize state with an empty array or a few sample books
  const [books, setBooks] = useState([
    { title: 'Squire', author: 'Nadia Shammas' },
    { title: 'Sisters of the Snake', author: 'Sasha Nanua' },
    { title: 'Beyond the End of the World', author: 'Amie Kaufman' }

  ]);

  // Function to add a new book
  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <AddBookForm addBook={addBook} />
        <BookList books={books} />
      </header>
    </div>
  );
}

export default App;