import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBarComponent.css"
import { Link } from "react-router-dom";

const NavBarComponent = () =>{
    return (
        <div className="Navbarstyles">
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand><Link to="/">Tienda Smile</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item><Link to="/">Inicio</Link></Nav.Item>
                        
                        <NavDropdown title="categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/category/laptops">Laptops</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/category/smartphones">
                                Smartphones</Link>
                            </NavDropdown.Item>
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