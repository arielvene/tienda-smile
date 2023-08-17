import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBarComponent.css"


const NavBarComponent = () =>{
    return (
        <div className="Navbarstyles">
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Tienda Smile</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">contacto</Nav.Link>
                        <NavDropdown title="categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">zapatillas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                buzos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">remeras</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
        </Navbar>
        </div>
    );
}

export default NavBarComponent;