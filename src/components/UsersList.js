import React from 'react';

import UserItem from './UserItem';
import Card from './UI/Card';
import './UsersList.css';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No users selected!</h2>
        </Card>
      </div>
    );
  }
  return (
    <div>
      <div>
        <ul className="users-list">
          {props.items.map((user) => {
            return (
              <UserItem
                key={user.id}
                id={user.id}
                picture={user.picture}
                name={user.name}
                age={user.dob.age}
                onRemove={props.onRemove}
                onSelectUser={props.onSelectUser}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
