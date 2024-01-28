import axios from 'axios';

const API_URL = 'http://localhost:3000'; // URL of the Express server

export const fetchFeeds = () => {
  return axios.get(`${API_URL}/feeds`);
};

export const createFeed = (feedData) => {
  return axios.post(`${API_URL}/feeds`, feedData);
};

export const fetchSubscribers = () => {
  return axios.get(`${API_URL}/subscribers`);
};

export const addSubscriber = (phone) => {
  return axios.post(`${API_URL}/subscribers`, { phone });
};

// Add more API functions as needed
