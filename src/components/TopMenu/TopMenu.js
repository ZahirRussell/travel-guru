import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Logo.png'


const TopMenu = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" id="nav" className="x-navbar">
            <Container fluid>
                <Link to="/">
                    <Navbar.Brand>
                        <img src={Logo} alt="" style={{filter: 'invert(100%)'}} width="110px" />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
                    <Nav className="ml-auto">
                        <Nav.Link className="text-white">News</Nav.Link>
                        <Nav.Link className="text-white">Destinations</Nav.Link>
                        <Nav.Link className="text-white">Blog</Nav.Link>
                        <Nav.Link className="text-white">Contact</Nav.Link>
                        {
                            user.signed ?
                            <Button onClick={() => setUser({
                                signed: false,
                                name: '',
                                email: '',
                                password: '',
                                message: ''
                            })} variant="warning" className="mx-2">Logout, {user.name}</Button> :
                            <Link to="/login">
                                <Button variant="warning" className="mx-2">Login</Button>
                            </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopMenu;