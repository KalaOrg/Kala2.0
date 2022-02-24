import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('Kala_Token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  }
  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    const newUserToken = {
      STATUS: userToken.STATUS,
      id: userToken.user._id
    }
    localStorage.setItem('Kala_Token', JSON.stringify(newUserToken));
    setToken(newUserToken);
  };

  return {
    setToken: saveToken,
    token
  }
}
