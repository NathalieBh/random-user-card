import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      image:
        'https://media.istockphoto.com/id/1278564529/fr/photo/verticale-de-photo-de-jolie-fille-de-sourire-mignonne-avec-les-cheveux-courts-de-brunette.jpg?s=612x612&w=0&k=20&c=On0-P0Z0oq5djJ-KsCPUuGatZ0k4iag4N1Ir8XAn-fY=',
      name: 'lisa Bern',
      number: '0658247167',
      email: 'lisa@gmail.com',
      address: '77600,Bussy',
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
