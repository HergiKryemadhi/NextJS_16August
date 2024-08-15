import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function EditBook({ books, setBooks }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const book = books.find(book => book.id === parseInt(id));
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setYear(book.year.toString());
    }
  }, [books, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBooks = books.map(book => 
      book.id === parseInt(id) ? { ...book, title, author, year: parseInt(year) } : book
    );
    setBooks(updatedBooks);
    navigate('/books');
  };

  return (
    <div>
      <h2 className="mb-4">Edit Book</h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            required 
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Year</Form.Label>
          <Form.Control 
            type="number" 
            value={year} 
            onChange={(e) => setYear(e.target.value)} 
            required 
            autoComplete="off"
          />
        </Form.Group>
        <Button variant="primary" type="submit">Update Book</Button>
      </Form>
    </div>
  );
}

export default EditBook;