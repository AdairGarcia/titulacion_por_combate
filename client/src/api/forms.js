import axios from './axios.js';

export const getFormsRequest = () => axios.get('/forms');
export const getFormRequest = (formId) => axios.get(`/forms/${formId}`);

export const createFormsRequest = (form) => axios.post('/forms', form);
export const updateFormsRequest = (formId, form) => axios.put(`/forms/${formId}`, form);
export const deleteFormsRequest = (formId) => axios.delete(`/forms/${formId}`);
