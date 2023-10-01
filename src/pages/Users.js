import React, { useState, useEffect } from 'react';
import UsersList from '../components/UsersList';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = [];
        for (let i = 0; i < 10; i++) {
          const res = await axios.get('https://randomuser.me/api/');
          const user = res.data.results[0];
          const userData = {
            id: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            picture: user.picture.medium,
          };
          usersData.push(userData);
          setIsLoading(false);
        }
        setUsers(usersData);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <di> {isLoading ? <p>isLoading ...</p> : <UsersList items={users} />}</di>
  );
};

export default Users;
