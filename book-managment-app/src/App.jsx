import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Home from './components/Home';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? 'dark' : 'light'}>
      <Router>
        <div className="app-container">
          <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
          <Container className="mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<BookList books={books} setBooks={setBooks} />} />
              <Route path="/add" element={<AddBook books={books} setBooks={setBooks} />} />
              <Route path="/edit/:id" element={<EditBook books={books} setBooks={setBooks} />} />
            </Routes>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;