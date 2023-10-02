import React from 'react';
import './UserCard.css';

const UserCard = ({ userDetails, onRemove, onClose }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        <img src={userDetails.picture} alt={userDetails.name} />
      </div>
      <div className="user-name">{userDetails.name}</div>
      <div className="user-info">
        <p>Cell: {userDetails.cell}</p>
        <p>Email: {userDetails.email}</p>
        <p>Location: {userDetails.location}</p>
      </div>
      <div className="user-buttons">
        <button className="button" onClick={() => onRemove(userDetails.id)}>
          Delete User
        </button>
        <button className="button--alt" onClick={() => onClose()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default UserCard;
