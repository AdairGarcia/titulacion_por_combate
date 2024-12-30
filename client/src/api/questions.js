import axios from './axios.js';

export const createQuestionRequest = (idForm, question) => axios.post(`/forms/${idForm}/questions`, question);

export const deleteQuestionRequest = (idForm, idQuestion) => axios.delete(`/forms/${idForm}/questions/${idQuestion}`);