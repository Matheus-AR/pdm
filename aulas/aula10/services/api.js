import axios from 'axios';

const doGet = async (url) => {
  await axios
    .get(url)
    .then((response) => console.log(response.status, response.data))
    .catch((error) => console.log(error));
};

const doPost = async (url, body) => {
  await axios
    .post(url, body)
    .then((response) => console.log(response.status, response.data))
    .catch((error) => console.log(error.code));
};

const doPut = async (url, body) => {
  await axios
    .put(url, body)
    .then((response) => console.log(response.status, response.data))
    .catch((error) => console.log(error));
};

const doDelete = async (url) => {
  await axios
    .delete(url)
    .then((response) => console.log(response.status, response.data))
    .catch((error) => console.log(error));
};

export { doGet, doPost, doPut, doDelete };
