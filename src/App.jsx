import axios from 'axios';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import LogoutButton from './components/LogoutButton.jsx';

export default function App() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/logout');
    if (res.data.success) {
      navigate('/');
    }
  };

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/movies">Trailer Trash</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          
          <Nav.Link href="/movies">Movies</Nav.Link>
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          
          <LogoutButton onLogout={handleLogout} />
          
      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <hr />

      <main>
        <Outlet />
      </main>
    </>
  );
}
