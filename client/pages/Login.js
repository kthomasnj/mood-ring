import React, { useState } from 'react';

export const Login = () => {
    return (
        <form>
            <label for='username'>Username</label>
            <input type='username' placeholder='username' id='username' name='username' />
            <label for='password'>Password</label>
            <input type='password' placeholder='' id='password' name='password' />
            <button>Login</button>
        </form>
    )

    // const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');
}