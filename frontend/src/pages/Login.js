import React, { useContext, useState } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { useLoginUserMutation } from '../services/appApi';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { AppContext } from '../contexts/appContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser, { isLoading, error }] = useLoginUserMutation();
    const navigate = useNavigate();
    const { socket } = useContext(AppContext)
    const handleLogin = (e) => {
        e.preventDefault();
        //login user
        loginUser({ email, password }).then(({ data }) => {
            if (data) {
                //socket work
                socket.emit('new-user')
                //navigate to chat
                navigate('/chat');
            }
        });
    }
    return (
        <Container>

            <Row>
                <Col md={5} className='bgLogin'></Col>
                <Col md={5} className='d-flex align-items-center justify-content-center flex-direction-column'>
                    <Form className='form' onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} value={email} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
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