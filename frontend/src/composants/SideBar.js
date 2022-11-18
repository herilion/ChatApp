import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppContext } from '../contexts/appContext';
import '../styles/SideBar.css'

const SideBar = () => {
    // const rooms = ['room 1', 'room 2', 'room3', 'room3'];
    const user = useSelector((state) => state.user);
    const { socket, setMembers, members, setCurrentRoom, setRooms, privateMemberMsg, rooms, setPrivateMemberMsg, currentRoom } = useContext(AppContext);
    socket.off('new-user').on('new-user', (payload) => {
        console.log(payload);
        setMembers(payload);
    })
    if (!user) return <></>
    return (
        <>
            <h2>Available rooms</h2>
            <ListGroup>
                {rooms.map((room, idx) => (
                    <ListGroup.Item key={idx}>{room}</ListGroup.Item>
                ))}
            </ListGroup>
            <h2>Users</h2>
            <ListGroup>
                {members.map((member) => (
                    <ListGroup.Item key={member.id}>
                        {member.name}
                    </ListGroup.Item>))
                }
            </ListGroup>
        </>
    )
}

export default SideBar