import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('Kala_Token');
    const userToken = JSON.parse(tokenString);
    return userToken
  }
  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('Kala_Token', JSON.stringify(userToken));
    console.log('useToken.js userToken: ', userToken)
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}
