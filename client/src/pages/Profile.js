import React from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

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
            <Link style={{textDecoration: 'none'}} className="m-2 login-header" to="/">
              HOME
            </Link>
            </div>
          </div>
        </div>
      </header>
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
         
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
          </div>
        )}
      </div>
    </div>
    </body>
  );
};

export default Profile;
