import React, { useEffect, useState } from 'react';

 function Apiusers() {
    const [users, setUsers] = useState([]);
    useEffect( () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, []);

  return (
    <div>
        <h1>Users : <span>{users.length}</span></h1>
        {
            users.map(user => <User user={user} key={user.id} /> )
        }
    </div>
  )
}

function User(props){
    console.log(props.user.name);
    return (
        <div style={{border:'2px solid #25f', margin:'20px', padding: '10px', width:'320px', display:'inline-block'}}>
            <h3>Name: {props.user.name}</h3>
            <p>Email: {props.user.email}</p>
        </div>
    )
}


export default Apiusers;