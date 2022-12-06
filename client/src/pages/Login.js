import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <body>
    <header className="bg-dark text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div className='pl-5 pr-5'>
          <Link style={{textDecoration: 'none'}} className="text-light" to="/">
            <h1 className="m-0 col-sm-12 title-animation">MOOD RING</h1>
          </Link>
          <p className="m-0 title-header">sit back and relax</p>
        </div>
        <div className='flex-row'>
          <div className='col-sm-12 my-4 pl-5 pr-5'>
            <Link style={{textDecoration: 'none'}} className="m-2 login-header" to="/signup">
              SIGN UP
            </Link>
          </div>
      </div>
      </div>
    </header>
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="login-card">
          <h4 className=" text-center p-2 login-card">SIGN IN</h4>
          <div className="card-body text-center">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-dark text-white"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
    </body>
  );
};

export default Login;

