import { Table, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BookList({ books, setBooks }) {
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  if (books.length === 0) {
    return (
      <div>
        <h2 className="mb-4">Book List</h2>
        <Alert variant="info">
          No books in your collection. Add some books to get started!
        </Alert>
        <Button as={Link} to="/add" variant="primary">Add a Book</Button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4">Book List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>
                <Button as={Link} to={`/edit/${book.id}`} variant="info" size="sm" className="me-2">Edit</Button>
                <Button onClick={() => handleDelete(book.id)} variant="danger" size="sm">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BookList;