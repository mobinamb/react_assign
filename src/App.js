import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm'; // You will create this component in the next step
import './App.css';

const apiBaseUrl = 'https://654166c1f0b8287df1fe51c2.mockapi.io/books'
function App() {
  const [books, setBooks] = useState([]);

  // Fetch books
  useEffect(() => {
    fetch(apiBaseUrl)
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  // Add book
  const addBook = (newBook) => {
    fetch(apiBaseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    }).then(response => response.json())
    .then(newBook => {
      setBooks([...books, newBook]);
    });
  };

  // Remove book
  const removeBook = (id) => {
    fetch(`${apiBaseUrl}/${id}`, { method: 'DELETE' })
      .then(() => {
        // Remove the book from the local state
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
      });
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <AddBookForm addBook={addBook} />
        <BookList books={books} onRemoveBook={removeBook} />
      </header>
    </div>
  );
}

export default App;