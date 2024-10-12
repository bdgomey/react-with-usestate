const url = 'https://api.github.com/users';

import React, { useEffect, useState } from 'react';

const UsingEffect2 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        console.log(users);
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <h3>GitHub Users</h3>
      {users.map((user) => {
        const { id, login, avatar_url, repos_url } = user;
        return (
          <li key={id}>
            <img src={avatar_url} alt="" />
            <h4>{login}</h4>
            <h4>
              <a href={ repos_url }>{repos_url}</a>
              
            </h4>
          </li>
        );
      })}
    </>
  );
};

export default UsingEffect2;
