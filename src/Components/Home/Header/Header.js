import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../hooks/useAuth';

const Header = () => {
    const { GoogleUsingSignIn, user, logOut} = useAuth();
    return (
            <Container>
               <Row>
                <Navbar className="fw-bold shadow-lg" fixed="top" bg="light" variant="light">
                        <Container>
                            <Navbar.Brand className="text-danger  p-2" to="/home">Health<span className="text-info">care</span></Navbar.Brand>
                            <Navbar.Collapse className="justify-content-end">
                                <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                                <Link  to="/Service">Services</Link>
                                <Nav.Link as={HashLink} to="/Shops">Shops</Nav.Link>
                                <Nav.Link as={HashLink} to="/About">About Us</Nav.Link>
                                <Nav.Link as={HashLink} to="/login">Register</Nav.Link>
                            {user?.email ? <button className="btn btn-danger" onClick={logOut}>LogOut</button>
                            : <button className="btn btn-success" onClick={GoogleUsingSignIn}>Login</button>} <br />
                            <Navbar.Text className="text-primary">
                            {user.displayName}
                            </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
               </Row>
            </Container>
    );
};

export default Header;