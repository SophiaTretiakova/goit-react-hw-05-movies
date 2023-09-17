import axios from 'axios';

API_KEY = '0a59c656d51fca7e44fc925cdf601916';
axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/11?api_key=${API_KEY}`;

// export const fetchQuizzes = async () => {
//   const resp = await axios.get('/quizzes');
//   return resp.data;
// };

// export const fetchQuizById = async quizId => {
//   const resp = await axios.get(`/quizzes/${quizId}`);
//   return resp.data;
// };

// export const deleteQuizById = async quizId => {
//   const resp = await axios.delete(`/quizzes/${quizId}`);
//   return resp.data;
// };

// export const createQuiz = async quiz => {
//   const resp = await axios.post('/quizzes', quiz);
//   return resp.data;
// };
