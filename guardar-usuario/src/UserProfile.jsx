import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Nombre de usuario: {userName}</p>
    </div>
  );
}

export default UserProfile;
