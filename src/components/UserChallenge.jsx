import React, { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const userLogin = () => {
    setUser({ name: 'Brian' });
  };
  const userLogout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.name}</h1>
          <button className="btn" onClick={userLogout}>
            LogOut
          </button>
        </div>
      ) : (
        <div>
          <h1>Please Log In</h1>
          <button className="btn" onClick={userLogin}>
            LogIn
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
