import React from 'react';
import { Link } from 'react-router-dom';
import './UserItem.css';
import Avatar from './UI/Avatar';

const UsersItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <Link to={`/${props.id}/details`}>
          <div className="user-item__image">
            <Avatar image={props.picture} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            {/* <h3>{props.gender}</h3> */}
            {/* <h4>{props.dob}</h4> */}
          </div>
        </Link>
      </div>
    </li>
  );
};

export default UsersItem;
