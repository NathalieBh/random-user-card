import React, { useState } from 'react';
import './UserCard.css';
import {
  Email,
  Phone,
  CalendarMonth,
  Delete,
  Close,
  Home
} from '@mui/icons-material';

const UserCard = ({ userDetails, onRemove, onClose }) => {
  const [displayInfo, setdisplayInfo] = useState({
    phone: false,
    email: false,
    address: false,
    birthdate: false,
    localisation: false
  });
  const handlerPhoneOnMouseLeave = () => {
    setdisplayInfo({ ...displayInfo, phone: false });
  };

  const handlerPhoneOnMouseEnter = () => {
    setdisplayInfo({ ...displayInfo, phone: true });
  };

  const handlerDateOnMouseLeave = () => {
    setdisplayInfo({ ...displayInfo, date: false });
  };

  const handlerDateOnMouseEnter = () => {
    setdisplayInfo({ ...displayInfo, date: true });
  };

  const handlerEmailOnMouseLeave = () => {
    setdisplayInfo({ ...displayInfo, email: false });
  };

  const handlerEmailOnMouseEnter = () => {
    setdisplayInfo({ ...displayInfo, email: true });
  };
  const handlerLocationOnMouseLeave = () => {
    setdisplayInfo({ ...displayInfo, location: false });
  };

  const handlerLocationOnMouseEnter = () => {
    setdisplayInfo({ ...displayInfo, location: true });
  };

  const formateDate = date => {
    const arrayOfDate = date.split('-');
    return `${arrayOfDate[1]}/${arrayOfDate[2].substr(0, 2)}/${
      arrayOfDate[0]
    }`.toString();
  };
  return (
    <div className="user-card">
      <div className="user-avatar">
        <img src={userDetails.picture} alt={userDetails.name} />
      </div>
      <div className="user-name">{userDetails.name}</div>
      <div className="user-info">
        <div
          className="icon-container"
          onMouseLeave={handlerPhoneOnMouseLeave}
          onMouseEnter={handlerPhoneOnMouseEnter}
        >
          <Phone className="icon" />
          {displayInfo.phone && <div className="info">{userDetails.cell}</div>}
        </div>
        <div
          className="icon-container"
          onMouseLeave={handlerEmailOnMouseLeave}
          onMouseEnter={handlerEmailOnMouseEnter}
        >
          <Email className="icon" />
          {displayInfo.email && <div className="info">{userDetails.email}</div>}
        </div>
        <div
          className="icon-container"
          onMouseLeave={handlerDateOnMouseLeave}
          onMouseEnter={handlerDateOnMouseEnter}
        >
          <CalendarMonth className="icon" />
          {displayInfo.date && (
            <div className="info">{formateDate(userDetails.dob.date)}</div>
          )}
        </div>
        <div
          className="icon-container"
          onMouseLeave={handlerLocationOnMouseLeave}
          onMouseEnter={handlerLocationOnMouseEnter}
        >
          <Home className="icon" />
          {displayInfo.location && (
            <div className="info">{userDetails.location}</div>
          )}
        </div>
      </div>
      <div className="user-buttons">
        <button className="button" onClick={() => onRemove(userDetails.id)}>
          <Delete />
        </button>
        <button className="button--alt" onClick={() => onClose()}>
          <Close />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
