// starwars-mern/client/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const fetchPeople = async () => {
  try {
    const response = await axios.get(`${API_URL}/people`);
    return response.data;
  } catch (error) {
    console.error('Error fetching people:', error);
    throw error;
  }
};
