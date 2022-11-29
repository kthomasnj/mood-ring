import React, { useState } from 'react';
export default function Form() {

// States for registration
const [userName, setUserName] = useState('');
const [password, setPassword] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');


// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the Username change
const handleUserName = (e) => {
setUserName(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

// Handling the Name change
const handleFirstName = (e) => {
setFirstName(e.target.value);
setSubmitted(false);
};

const handleLastName = (e) => {
setLastName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};



// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (userName === '' || password === '' || firstName === '' || lastName === '' || email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>User {name} successfully registered!!</h1>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div class="ui form">

{/* Calling to the methods */}
<div class="messages">
{errorMessage()}
{successMessage()}
</div>

<form>
{/* Labels and inputs for form data */}
<div class="fields">
    <div class="field"> 
        <label className="label">Username</label>
        <input onChange={handleUserName} className="input" value={userName} type="text"/>
    </div>
    <div class="field"> 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input" value={password} type="password"/>
    </div>
</div>

    <div class="field"> 
        <label className="label">First Name</label>
        <input onChange={handleFirstName} className="input" value={firstName} type="text"/>
    </div>

    <div class="field">
        <label className="label">lastname</label>
        <input onChange={handleLastName} className="input" value={lastName} type="text"/>
    </div>

    <div class="field">
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input" value={email} type="email"/>
    </div>
    <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
</form>
</div>

)
};