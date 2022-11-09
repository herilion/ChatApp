import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import '../styles/SignUp.css'
import user from '../assets/user.png'

const SignUp = () => {
    return (
        <Container>
            <Row>
                <Col md={5} className='d-flex align-items-center justify-content-center flex-direction-column'>
                    <Form className='form'>
                        <h2 className='titleSignup'>Créer un compte</h2>
                        <div className='signupProfileContainer'>
                            <img src={user} className='signupProfilPic' alt="" />
                            <label htmlFor='imageUpload' className='imageUploadLabel'>
                                <i className='fas fa-plus-circle addPictureIcon'></i>
                            </label>
                            <input type="file" id='imageUpload' hidden />
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Votre Nom</Form.Label>
                            <Form.Control type="text" placeholder="Votre Nom ici" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Créer un compte
                        </Button>
                    </Form>
                </Col>
                <Col md={5} className='bgSignUp'></Col>
            </Row>
        </Container>
    );

}

export default SignUp