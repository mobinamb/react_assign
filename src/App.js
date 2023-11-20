import React from 'react';
import BookList from './BookList';

function App() {
  // Define the list of books
  const books = [
    { title: 'Squire', author: 'Nadia Shammas' },
    { title: 'Sisters of the Snake', author: 'Sasha Nanua' },
    { title: 'Beyond the End of the World', author: 'Amie Kaufman' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* Other content */}
        <BookList books={books} />
      </header>
    </div>
  );
}

export default App;
