import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link style={{ textDecoration: 'none', color: 'black', padding: '10px, 30px' }} as={Link} to='/'>Home</Nav.Link> 
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link style={{ textDecoration: 'none', color: 'black', padding: '10px, 30px' }} as={Link} to='/printers'>3D Printers</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link style={{ textDecoration: 'none', color: 'black', padding: '10px, 30px' }} as={Link} to='/materials'>Printing Materials</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link style={{ textDecoration: 'none', color: 'black', padding: '10px, 30px' }} as={Link} to='/tutorials'>Tutorials</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link style={{ textDecoration: 'none', color: 'black', padding: '10px, 30px' }} as={Link} to='/community'>Community</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link style={{ textDecoration: 'none', color: 'black', padding: '10px, 30px' }} as={Link} to='/about'>About</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;
