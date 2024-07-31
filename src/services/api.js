import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000'
});

export const loginUser = (credentials) => API.post('/api/auth/login', credentials);
export const performOperation = (operation, token) => API.post('/api/operations', operation, { headers: { Authorization: `Bearer ${token}` } });
export const fetchRecords = (token, page, perPage, search) => API.get(`/api/records?page=${page}&perPage=${perPage}&search=${search}`, { headers: { Authorization: `Bearer ${token}` } });
