import React from 'react';
import { ListGroup } from 'react-bootstrap';

const SideBar = () => {
    const rooms = ['room 1', 'room 2', 'room3', 'room3'];
    return (
        <>
            <h2>Available rooms</h2>
            <ListGroup>
                {rooms.map((room, idx) => (
                    <ListGroup.Item key={idx}>{room}</ListGroup.Item>
                ))}
            </ListGroup>
            <h2>Users</h2>
        </>
    )
}

export default SideBar