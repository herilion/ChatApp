import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Home.css'

const Home = () => {
    return (
        <Row>
            <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
                <div>
                    <h1>Partagez le mot avec vos amis</h1>
                    <p>Communiquez aussi facilement que rapidement</p>
                    <LinkContainer to='/chat'>
                        <Button variant='success'>Commencer<i className='fas fa-comments messageIcon'></i></Button>

                    </LinkContainer>
                </div>
            </Col>
            <Col md={6} className='bgHome'></Col>
        </Row>
    )
}

export default Home
