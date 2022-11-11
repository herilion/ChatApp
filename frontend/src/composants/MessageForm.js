import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../styles/MessageForm.css'

const MessageForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div className='messagesOutput'></div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={11}>
                        <Form.Group>
                            <Form.Control type='text' placeholder='your message here'></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={1}>
                        <Button variant='primary' type='submit' id='btnMessage'>
                            <i className='fas fa-paper-plane'></i>
                        </Button>

                    </Col>
                </Row>
            </Form>

        </div>
    )
}

export default MessageForm