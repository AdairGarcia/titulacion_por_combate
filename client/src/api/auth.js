import axios from 'axios';

export const signupRequest = user => axios.post('api/signup', user)
export const signinRequest = user => axios.post('api/signin', user)
export const verifiTokenRequest = () => axios.get('api/verify')