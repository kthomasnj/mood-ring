import React, { useState } from 'react';

export const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

    }

    return (
        <>
        
            <form onLogin={handleLogin}>
                <label for='username'>Username</label>
                <input value={userName} onChange={(e) => setUserName(e.target.value)}type='username' placeholder='username' id='username' name='username' />
                <label for='password'>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type='password' placeholder='' id='password' name='password' />
                <button type="login">Login</button>
            
            </form>

            <link onClick={props.onFormSwitch}>Don't have an account? Click here to register.</link>
        </>
    )

    
}