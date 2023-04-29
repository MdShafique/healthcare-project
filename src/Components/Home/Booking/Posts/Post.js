import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

const Post = () => {
    const [users, setUsers] = useState([]);
    const nameRef = useRef();
    const emailRef = useRef();

    useEffect(() =>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])

    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = {name: name, email: email}
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser),
            
        })
        .then(res => res.json())
        .then(data => {
           const addedUser = data;
           const newUser = [...users, addedUser];
           setUsers(newUser);
        })
        nameRef.current.value = '';
        emailRef.current.value = '';
        e.preventDefault();
    }

    return (
        <div className="mt-5">
              <h1 className="mt-5 text-info">Add your Name Or Email</h1>
              <form onSubmit={handleAddUser}>
                  <input type="text" ref={nameRef} placeholder="name"/>
                  <input type="email" ref={emailRef} placeholder="email"/>
                  <input type="submit" value="submit"/>
              </form>
              <ul>
                  {
                      users.map(user => <li>{user.id}. {user.name} {user.email}</li>)
                  }
              </ul>
        </div>
            
        
    );
};

export default Post;