import React from 'react';
import { Link } from 'react-router-dom';
import MoodSelect from '../components/MoodSelect';

import Auth from '../utils/auth';

const Home = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link style={{textDecoration: 'none'}} className="text-light" to="/">
            <h1 className="m-0 title-animation">MOOD RING</h1>
          </Link>
          <p className="m-0 title-header">Sit back and Relax</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link style={{textDecoration: 'none'}} className="m-2 login-header" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-light m-2 logout-header" onClick={logout}>
                SIGN OUT
              </button>
            </>
          ) : (
            <>
              <Link style={{textDecoration: 'none'}} className="m-2 login-header" to="/login">
                LOGIN
              </Link>
              <Link style={{textDecoration: 'none'}} className="m-2 signup-header" to="/signup">
                SIGN UP
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
    <MoodSelect />
    </div>

  );
};

export default Home;