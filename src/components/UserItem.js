import React from 'react';
import './UserItem.css';
import Avatar from './UI/Avatar';

const UsersItem = (props) => {
  const syleToSend = {
    width: '100%',
    height: '100%',
  };
  return (
    <li className="user-item" onClick={() => props.onSelectUser(props.id)}>
      <div>
        <span>
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
            <p>Age : {props.age}</p>
          </div>
          <button onClick={() => props.onRemove(props.id)} className="delete">
            x
          </button>
        </span>
      </div>
    </li>
  );
};

export default UsersItem;
