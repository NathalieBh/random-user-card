import React from 'react';
import './UserItem.css';
import Avatar from './UI/Avatar';
import { Close } from '@mui/icons-material';
import { Modal } from '@mui/material';

const UsersItem = (props) => {
  const syleToSend = {
    width: '100%',
    height: '100%',
  };
  return (
    <li className="user-item">
      <div className="user-item__content">
        <div onClick={() => props.onSelectUser(props.id)}>
          <div className="user-item__image">
            <Avatar
              picture={props.picture}
              alt={props.name}
              className="img"
              syle={syleToSend}
            />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <p className="box">Age : {props.age}</p>
          </div>
        </div>
        <button
          onClick={() => props.onRemove(props.id)}
          className="delete-button"
        >
          <Close style={{ color: 'white' }} />
        </button>
      </div>
    </li>
  );
};

export default UsersItem;
