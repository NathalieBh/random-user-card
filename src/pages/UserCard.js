import React from 'react';

const UserCard = ({ user, onDelete, onClose }) => {
  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>ID: {user.id}</p>
      <img src={user.picture} alt={user.name} />
      <button onClick={handleDelete}>Delete User</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default UserCard;
