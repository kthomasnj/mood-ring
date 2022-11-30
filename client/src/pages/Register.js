import React, { useState } from 'react';

export const Register = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input value={userName} onChange={(e) => setUserName(e.target.value)}type='username' placeholder='username' id='username' name='username' />
            <label for='password'>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}type='password' placeholder='' id='password' name='password' />
            <label>First Name</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)}type='firstname' placeholder='firstname' id='firstname' name='firstname' />
            <label>Last Name</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)}type='lastname' placeholder='lastname' id='lastname' name='lastname' />
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type='email' placeholder='email' id='email' name='email' />  
        </form>
            <button onClick={() => props.onFormSwitch('login')}>Login</button>
          
        </>
    )
}



// export default function Form() {

// // States for registration



// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// // Handling the Username change
// const handleUserName = (e) => {
// setUserName(e.target.value);
// setSubmitted(false);
// };

// // Handling the password change
// const handlePassword = (e) => {
// setPassword(e.target.value);
// setSubmitted(false);
// };

// // Handling the Name change
// const handleFirstName = (e) => {
// setFirstName(e.target.value);
// setSubmitted(false);
// };

// const handleLastName = (e) => {
// setLastName(e.target.value);
// setSubmitted(false);
// };

// // Handling the email change
// const handleEmail = (e) => {
// setEmail(e.target.value);
// setSubmitted(false);
// };



// // Handling the form submission
// const handleSubmit = (e) => {
// e.preventDefault();
// if (userName === '' || password === '' || firstName === '' || lastName === '' || email === '' || password === '') {
// setError(true);
// } else {
// setSubmitted(true);
// setError(false);
// }
// };

// // Showing success message
// const successMessage = () => {
// return (
// <div
// className="success"
// style={{
// display: submitted ? '' : 'none',
// }}>
// <h1>User {name} successfully registered!!</h1>
// </div>
// );
// };

// // Showing error message if error is true
// const errorMessage = () => {
// return (
// <div
// className="error"
// style={{
// display: error ? '' : 'none',
// }}>
// <h1>Please enter all the fields</h1>
// </div>
// );
// };

// return (
// <div class="ui form">

// {/* Calling to the methods */}
// <div class="messages">
// {errorMessage()}
// {successMessage()}
// </div>

// <form>
// {/* Labels and inputs for form data */}
// <div class="fields">
//     <div class="field"> 
//         <label className="label">Username</label>
//         <input onChange={handleUserName} className="input" value={userName} type="text"/>
//     </div>
//     <div class="field"> 
//         <label className="label">Password</label>
//         <input onChange={handlePassword} className="input" value={password} type="password"/>
//     </div>
// </div>

//     <div class="field"> 
//         <label className="label">First Name</label>
//         <input onChange={handleFirstName} className="input" value={firstName} type="text"/>
//     </div>

//     <div class="field">
//         <label className="label">lastname</label>
//         <input onChange={handleLastName} className="input" value={lastName} type="text"/>
//     </div>

//     <div class="field">
//         <label className="label">Email</label>
//         <input onChange={handleEmail} className="input" value={email} type="email"/>
//     </div>
//     <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
// </form>
// </div>

// )
// };