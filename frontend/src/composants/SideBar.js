import React, { useContext, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppContext } from '../contexts/appContext';
import '../styles/SideBar.css'

const SideBar = () => {
    // const rooms = ['room 1', 'room 2', 'room3', 'room3'];
    const user = useSelector((state) => state.user);
    const { socket, setMembers, members, setCurrentRoom, setRooms, privateMemberMsg, rooms, setPrivateMemberMsg, currentRoom } = useContext(AppContext);
    useEffect(() => {
        if (user) {
            setCurrentRoom("room 1");
            getRooms();
            socket.emit("join-room", "romm 1");
            socket.emit("new-user");
        }
    }, []);

    socket.off('new-user').on('new-user', (payload) => {
        // console.log(payload);
        setMembers(payload);
    })
    //get all room in system
    const getRooms = () => {
        fetch("http://localhost:3001/rooms")
            .then((res) => res.json())
            .then((data) => setRooms(data));
    }

    if (!user) {
        return <></>
    }
    return (
        <>
            <h2>Available rooms in  stystem</h2>
            {/* <ListGroup>
                {rooms.map((room, idx) => (
                    <ListGroup.Item key={idx}>{room}</ListGroup.Item>
                ))}
            </ListGroup> */}
            <h2>Users in system</h2>
            <ListGroup>
                {members.map((member) => (
                    <ListGroup.Item key={member.id} id='member'>
                        {member.name}
                    </ListGroup.Item>))
                }
            </ListGroup>
        </>
    )
}

export default SideBar