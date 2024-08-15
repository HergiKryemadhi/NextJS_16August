import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function AddBook({ books, setBooks }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: books.length + 1,
      title,
      author,
      year: parseInt(year)
    };
    setBooks([...books, newBook]);
    navigate('/books');
  };

  return (
    <div>
      <h2 className="mb-4">Add New Book</h2>
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
        <Button variant="primary" type="submit">Add Book</Button>
      </Form>
    </div>
  );
}

export default AddBook;