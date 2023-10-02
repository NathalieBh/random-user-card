import React, { useState, useEffect } from 'react';
import UsersList from './UsersList';
import axios from 'axios';
import Modal from './UI/Modal';
import UserCard from './UserCard';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState();

  const fetchUsersData = (userNumber) => {
    setIsLoading(true);
    axios
      .get(`https://randomuser.me/api/?results=${userNumber}`)
      .then((usersData) => {
        const formattedUserData = usersData.data.results.map((user) => {
          return {
            id: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            picture: user.picture.large,
            dob: user.dob,
            gender: user.gender,
            email: user.email,
            cell: user.cell,
            location: user.location.city,
            title: user.name.title,
          };
        });
        setUsers(formattedUserData);
        setFilteredUsers(formattedUserData);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchUsersData(50);
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
    const sortedUser = filteredUsers
      .slice()
      .sort((a, b) => a.dob.age - b.dob.age);
    setFilteredUsers(sortedUser);
  };

  const handlerSelectUser = (id) => {
    setSelectedUser(filteredUsers.find((user) => user.id === id));
  };

  const handlerDeleteUser = (id) => {
    setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
    setUsers(users.filter((user) => user.id !== id));
    setSelectedUser(null);
  };
  const handlerBackdrop = () => {
    setSelectedUser(null);
  };

  const addTenUsers = () => {
    fetchUsersData(10);
  };
  return (
    <div className="users-container">
      {selectedUser && (
        <Modal onClose={handlerBackdrop}>
          <UserCard
            userDetails={selectedUser}
            onRemove={handlerDeleteUser}
            onClose={handlerBackdrop}
          />
        </Modal>
      )}
      <div className="action-buttons">
        <button onClick={handlerFemale}>Female</button>
        <button onClick={handlerMale}>Male</button>
        <button onClick={addTenUsers}>Add 10 users</button>
        <button onClick={handlerSortUserByAge}>Sort by Age</button>
      </div>

      <div>
        {isLoading ? (
          <div class="loader"></div>
        ) : (
          <UsersList
            items={filteredUsers}
            onRemove={handlerDeleteUser}
            onSelectUser={handlerSelectUser}
            selectedUser={selectedUser}
          />
        )}
      </div>
    </div>
  );
};

export default Users;
