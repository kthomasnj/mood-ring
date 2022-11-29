import React, { useState } from 'react';

export const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

    }

    return (
        <form onLogin={handleLogin}>
            <label for='username'>Username</label>
            <input value={userName} onChange={(e) => setUserName(e.target.value)}type='username' placeholder='username' id='username' name='username' />
            <label for='password'>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}type='password' placeholder='' id='password' name='password' />
            <button>Login</button>
        </form>
    )

    
}