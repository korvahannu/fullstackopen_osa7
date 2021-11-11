import axios from 'axios';
const baseUrl = '/api/comments';

let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const getAllComments = () => {

  const request = axios.get(baseUrl);

  return request.then(
    response => response.data
  );

};

const newComment = async (comment) => {

  const config = {
    headers:
        {
          Authorization: token
        }
  };

  const response = await axios.post(baseUrl, comment, config);

  return response.data;
};

const getCommentsOfBlog = async blog => {

  const config = {
    headers:
        {
          Authorization: token
        }
  };

  const response = await axios.get(`${baseUrl}/${blog.id}`, config);
  return response.data;
  
};


export default { getAllComments, newComment, getCommentsOfBlog, setToken };