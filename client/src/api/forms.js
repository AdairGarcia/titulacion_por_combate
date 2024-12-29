import axios from './axios.js';

export const getFormsRequest = () => axios.get('/forms');
export const getFormRequest = (formId) => axios.get(`/forms/${formId}`);

export const createFormsRequest = (form) => axios.post('/forms', form);
export const updateFormsRequest = (form) => axios.put(`/forms/${form._id}`, form);
export const deleteFormsRequest = (formId) => axios.delete(`/forms/${formId}`);
