import React from 'react';
import { Link } from 'react-router-dom';
import MoodSelect from '../components/MoodSelect';
import useSound from 'use-sound';

import Auth from '../utils/auth';

const Home = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
    <header className="bg-dark text-light mb-4 py-3 align-center my-header-1">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div className='pl-5 pr-5'>
          <Link style={{textDecoration: 'none'}} className="text-light" to="/">
            <h1 className="m-0 col-sm-12 title-animation">MOOD RING</h1>
          </Link>
          <p className="m-0 title-header">sit back and relax</p>
        </div>
        <div className='flex-row'>
          <div className='col-sm-12 my-4 pl-5 pr-5'>
          {Auth.loggedIn() ? (
            <>
              <Link style={{textDecoration: 'none'}} className="m-2 login-header" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-dark text-white m-2 logout-header" onClick={logout}>
                SIGN OUT
              </button>
            </>
          ) : (
            <>
              <Link style={{textDecoration: 'none'}} className="m-2 pr-5 login-header" to="/login">
                LOGIN
              </Link>
              <Link style={{textDecoration: 'none'}} className="m-2 pl-5 signup-header" to="/signup">
                SIGN UP
              </Link>
            </>
          )}
          </div>
        </div>
      </div>
    </header>
    <MoodSelect />
    </div>

  );
};

export default Home;