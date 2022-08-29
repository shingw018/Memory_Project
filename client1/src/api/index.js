import axios from 'axios';

//url pointing to our backend route
//const url = 'https://memories-project-new-shing.herokuapp.com/posts';
//`const url = 'http://localhost:5000/posts';
const url = 'https://memories-project-shing.herokuapp.com/posts';
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);