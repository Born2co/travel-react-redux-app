import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-239fd.firebaseio.com'
});

export default instance;