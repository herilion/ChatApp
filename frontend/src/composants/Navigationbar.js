import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux'
import '../styles/Navigationbar.css'
import solola from '../assets/solola.png'

const Navigationbar = () => {
    const user = useSelector((state) => state.user);
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to='/home'>
                    <Navbar.Brand>
                        <div className='logoGroup'>
                            <img src={solola} alt="logo solola app" className='ImgLogo' />
                            <h2>Solola Chat</h2>
                        </div>
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {!user && (
                            <LinkContainer to='/login'>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        )}
                        <LinkContainer to='/chat'>
                            <Nav.Link>Chat</Nav.Link>
                        </LinkContainer>
                        {user && (
                            <NavDropdown title={
                                <>
                                    <img src={user.picture} alt="profil image" id='profilUser' />
                                    {user.name}
                                </>
                            } id="basic-nav-dropdown">
                                <NavDropdown.Item href="/login">Se deconnecter</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Changer de compte
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigationbar;
