import axios from "axios";

const API_URL = "http://localhost:3001/api/reviews";

export const getReviews = () =>
  axios.get(API_URL).then((res) => res.data);

export const getReview = (id) =>
  axios.get(`${API_URL}/${id}`).then((res) => res.data);

export const createReview = (data) =>
  axios.post(API_URL, data);

export const updateReview = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteReview = (id) =>
  axios.delete(`${API_URL}/${id}`);
