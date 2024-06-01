// star-wars-mern/server/routes/api.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

const SWAPI_BASE_URL = 'https://swapi.dev/api';

const fetchFromSwapi = async (endpoint, id = '', search = '') => {
  try {
    let url = `${SWAPI_BASE_URL}/${endpoint}/`;
    if (id) {
      url += `${id}/`;
    }
    if (search) {
      url += `?search=${search}`;
    }
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint} from SWAPI:`, error);
    throw error;
  }
};

router.get('/people', async (req, res) => {
  try {
    const data = await fetchFromSwapi('people');
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching people');
  }
});

router.get('/people/:id', async (req, res) => {
  try {
    const data = await fetchFromSwapi('people', req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching person');
  }
});

router.get('/films', async (req, res) => {
  try {
    const data = await fetchFromSwapi('films');
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching films');
  }
});

router.get('/films/:id', async (req, res) => {
  try {
    const data = await fetchFromSwapi('films', req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching film');
  }
});

router.get('/starships', async (req, res) => {
  try {
    const data = await fetchFromSwapi('starships');
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching starships');
  }
});

router.get('/starships/:id', async (req, res) => {
  try {
    const data = await fetchFromSwapi('starships', req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching starship');
  }
});

router.get('/vehicles', async (req, res) => {
  try {
    const data = await fetchFromSwapi('vehicles');
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching vehicles');
  }
});

router.get('/vehicles/:id', async (req, res) => {
  try {
    const data = await fetchFromSwapi('vehicles', req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching vehicle');
  }
});

router.get('/species', async (req, res) => {
  try {
    const data = await fetchFromSwapi('species');
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching species');
  }
});

router.get('/species/:id', async (req, res) => {
  try {
    const data = await fetchFromSwapi('species', req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching species');
  }
});

router.get('/planets', async (req, res) => {
  try {
    const data = await fetchFromSwapi('planets');
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching planets');
  }
});

router.get('/planets/:id', async (req, res) => {
  try {
    const data = await fetchFromSwapi('planets', req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching planet');
  }
});

router.get('/search/:category/:query', async (req, res) => {
  const { category, query } = req.params;
  try {
    const data = await fetchFromSwapi(category, '', query);
    res.json(data);
  } catch (error) {
    res.status(500).send(`Error searching ${category}`);
  }
});

module.exports = router;
