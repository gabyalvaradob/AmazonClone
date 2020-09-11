import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-c4f60.cloudfunctions.net/api'
    // baseURL: 'http://localhost:5001/clone-c4f60/us-central1/api'
});

export default instance;