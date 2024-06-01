import axios from 'axios';

const API_URL = 'http://localhost:5001/api/favorites';

export const addFavorite = async (item, token) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  };
  const response = await axios.post(API_URL, item, config);
  return response.data;
};

export const removeFavorite = async (itemId, token) => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  };
  const response = await axios.delete(`${API_URL}/${itemId}`, config);
  return response.data;
};
