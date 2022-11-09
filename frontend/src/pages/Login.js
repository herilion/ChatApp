import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Login.css'

const Login = () => {
    return (
        <Container>
            <Row>
                <Col md={5} className='bgLogin'></Col>
                <Col md={5} className='d-flex align-items-center justify-content-center flex-direction-column'>
                    <Form className='form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Se connecter
                        </Button>
                        <div>
                            <p>
                                Vous n'avez pas de compte? <Link to='/signup'>SignUp</Link>
                            </p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login