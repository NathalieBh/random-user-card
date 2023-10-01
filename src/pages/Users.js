import React, { useState, useEffect } from 'react';
import UsersList from '../components/UsersList';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://randomuser.me/api/?results=100').then((usersData) => {
      const formattedUserData = usersData.data.results.map((user) => {
        return {
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          picture: user.picture.large,
          dob: user.dob,
          gender: user.gender,
        };
      });
      setUsers(formattedUserData);
      setFilteredUsers(formattedUserData);
      setIsLoading(false);
    });
  }, []);

  const handlerFemale = (event) => {
    event.preventDefault();
    setFilteredUsers(users.filter((user) => user.gender === 'female'));
  };
  const handlerMale = (event) => {
    event.preventDefault();
    setFilteredUsers(users.filter((user) => user.gender === 'male'));
  };
  const handlerSortUserByAge = (event) => {
    event.preventDefault();
    const sortedUser = filteredUsers.sort((a, b) => a.dob.age - b.dob.age);
    setFilteredUsers(sortedUser);
  };
  const handlerDeleteUser = (id) => {
    setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <button onClick={handlerFemale}>Female</button>
      <button onClick={handlerMale}>male</button>
      <button onClick={handlerSortUserByAge}>Sort by Age</button>
      <div>
        {isLoading ? (
          <p>isLoading ...</p>
        ) : (
          <UsersList items={filteredUsers} onRemove={handlerDeleteUser} />
        )}
      </div>
    </div>
  );
};

export default Users;
