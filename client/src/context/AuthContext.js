import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Correct import
import api from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    user: null,
  });

  useEffect(() => {
    if (auth.token) {
      api.get(`/auth`).then(res => {
        setAuth({
          token: auth.token,
          user: res.data,
        });
      }).catch(err => {
        localStorage.removeItem('token');
        setAuth({
          token: null,
          user: null,
        });
      });
    }
  }, [auth.token]);

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    const user = jwtDecode(res.data.token);
    setAuth({
      token: res.data.token,
      user,
    });
  };

  const register = async (name, email, password) => {
    const res = await api.post('/auth/register', { name, email, password });
    localStorage.setItem('token', res.data.token);
    const user = jwtDecode(res.data.token);
    setAuth({
      token: res.data.token,
      user,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({
      token: null,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
