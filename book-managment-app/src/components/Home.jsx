import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="text-center">
      <h1 className="mb-4">Welcome to the Book Management App</h1>
      <p className="mb-4">
        This application allows you to manage your book collection efficiently.
        You can add new books, view your existing collection, edit book details, and remove books from your list.
      </p>
      <Button as={Link} to="/books" variant="primary">View Books</Button>
    </Container>
  );
}

export default Home;