import React from 'react';
import axios from 'axios';
import jwt from 'jwt-decode';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState('');

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/api/v1/users/login`,
        {
          email,
          password,
        },
      );

      const jwtToken = response.data.token;
      localStorage.setItem('token', jwtToken);

      const decodeJwt = jwt(jwtToken);
      setUser(decodeJwt);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const contextValue = React.useMemo(() => {
    return {
      loogedInUser: user,
      login,
    };
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => React.useContext(AuthContext);
