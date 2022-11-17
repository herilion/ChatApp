import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import '../styles/MessageForm.css'
import { useSelector } from 'react-redux';

const MessageForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const user = useSelector((state) => state.user);
    return (
        <>
            <div className='messagesOutput'>
                {!user && <div className='alert alert-danger'>Please login</div>}
            </div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={11}>
                        <Form.Group className='iptmessage'>
                            <Form.Control type='text' placeholder='your message here' disabled={!user}></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={1}>
                        <Button variant='primary' type='submit' id='btnMessage' disabled={!user} >
                            <i className='fas fa-paper-plane'></i>
                        </Button>

                    </Col>
                </Row>
            </Form>

        </>
    )
}

export default MessageForm