import React, { useEffect, useContext } from 'react';
import { UserProvider, UserContext } from './UserContext';
import UserProfile from './UserProfile';

function App() {
  const { setUserName } = useContext(UserContext);

  useEffect(() => {
    const userNameFromAPI = "Felipe Larumbe";
    setUserName(userNameFromAPI); 
  }, [setUserName]);

  return (
    <div className="App">
      <h1>Aplicación de Contexto de Usuario</h1>
      <UserProfile />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
