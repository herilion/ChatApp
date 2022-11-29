import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppContext } from '../contexts/appContext';
import '../styles/MessageForm.css';

const MessageForm = () => {
    const [message, setMessage] = useState("");
    const user = useSelector((state) => state.user)
    const { socket, currentRoom, setMessages, messages, privateMemberMsg } = useContext(AppContext)
    const mes = ["Lionge", "gloire", "rolly", "jethron"]
    //function to format date
    console.log(messages)
    const getFormatterDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        let month = (1 + date.getMonth()).toString();

        month = month.length > 1 ? month : '0' + month;
        let day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        return day + "/" + month + "/" + year;
    }

    const todayDate = getFormatterDate();

    // socket.off("room-messages").on('room-messages', (roomMessages) => {
    //     console.log("room message", roomMessages);
    //     setMessages(roomMessages);
    // })
    socket.on('room-messages', (roomMessages) => {
        console.log("room message", roomMessages);
        setMessages(roomMessages);
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        const today = new Date();
        const minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
        const time = today.getHours() + ":" + minutes;
        const roomId = currentRoom;
        socket.emit('message-room', roomId, message, user, time, todayDate);
        setMessage('');
    }
    // socket.on('newMessage', (data) => {
    //     console.log(data)
    // })
    return (
        <>
            <div className='messagesOutput'>
                {!user && <div className='alert alert-danger'>Please login</div>}
                {user && messages.map(({ _id: date, messagesByDate }, idx) => {
                    <div key={idx}>
                        <p className='alert alert-info text-center message-date-indicator'>{date}</p>
                        {messagesByDate?.map(({ content, time, from: sender }, msgIdx) => {
                            <div className='message' key={msgIdx}>
                                {content}
                            </div>
                        })}
                    </div>
                })}
                {/* {mes.map((item, index) => (<span>{item}</span>))} */}
            </div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={11}>
                        <Form.Group className='iptmessage'>
                            <Form.Control type='text' placeholder='your message here' disabled={!user} value={message} onChange={(e) => setMessage(e.target.value)}></Form.Control>
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