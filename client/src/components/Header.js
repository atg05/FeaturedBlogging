import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () =>{
    return(
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="#">Blogging</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#latest">Latest</Nav.Link>
                </Nav>
            </Container>
        </Navbar>            
        );
    }


export default Header;