import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

export const fetchPeople = async () => {
  const response = await axios.get(`${API_BASE_URL}/people`);
  return response.data;
};

export const fetchFilms = async () => {
  const response = await axios.get(`${API_BASE_URL}/films`);
  return response.data;
};

export const fetchStarships = async () => {
  const response = await axios.get(`${API_BASE_URL}/starships`);
  return response.data;
};

export const fetchVehicles = async () => {
  const response = await axios.get(`${API_BASE_URL}/vehicles`);
  return response.data;
};

export const fetchSpecies = async () => {
  const response = await axios.get(`${API_BASE_URL}/species`);
  return response.data;
};

export const fetchPlanets = async () => {
  const response = await axios.get(`${API_BASE_URL}/planets`);
  return response.data;
};

export const fetchCharacterDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/people/${id}`);
  return response.data;
};

export const fetchFilmDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/films/${id}`);
  return response.data;
};

export const fetchStarshipDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/starships/${id}`);
  return response.data;
};

export const fetchVehicleDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/vehicles/${id}`);
  return response.data;
};

export const fetchSpeciesDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/species/${id}`);
  return response.data;
};

export const fetchPlanetDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/planets/${id}`);
  return response.data;
};

export const searchCategory = async (category, query) => {
  const response = await axios.get(`${API_BASE_URL}/search/${category}/${query}`);
  return response.data;
};
