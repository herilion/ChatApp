import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => {
    return (
        <Row>
            <Col md={6}>
                <h1>Partagez le mot avec vos amis</h1>
                <p>Communiquez aussi facilement que rapidement</p>
                <LinkContainer to='/chat'>
                    <Button variant='success'>Commencer</Button>
                </LinkContainer>
            </Col>
        </Row>
    )
}

export default Home
