import axios from './axios.js';

export const signupRequest = user => axios.post(`/signup`, user);
export const signinRequest = user => axios.post(`/signin`, user);
export const verifiTokenRequest = () => axios.get('/verify');
export const signoutRequest = () => axios.post('/signout');