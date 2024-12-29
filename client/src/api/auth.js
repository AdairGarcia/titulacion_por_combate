import axios from 'axios';

const API = 'http://localhost:4000/api'

export const signupRequest = user => axios.post(`${API}/signup`, user);
export const signinRequest = user => axios.post(`${API}/signin`, user);
// export const verifiTokenRequest = () => axios.get('/verify');