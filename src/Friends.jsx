// import {useEffect, useState } from "react"

// export default function Friends () {
//     const [friends , setFriends] = useState([])
//      useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data=>setFriends(data))
//     } , []);

//     const friendStyle ={
//         border : '2px solid tomato' ,
//         margin : '15px' ,
//         padding: '15px' ,
//         borderRadius : '15px'
//     }
//     return(
//         <div style={friendStyle}>
//             <h3>Friends:{friends.length}</h3>
//             {
//                 friends.map(friends => <Friend friend={friends}></Friend>)
//             }
//         </div>
//     )
// }

import React, { useEffect, useState } from "react";
import Friend from "./Friend"; // Assuming Friend component is defined in a separate file

export default function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const friendStyle = {
        border: '2px solid tomato',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    };

    return (
        <div style={friendStyle}>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend} />)
            }
        </div>
    );
}
