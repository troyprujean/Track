import axios from 'axios';

const workUrl = "http://172.17.150.21:3000";
const homeUrl = "http://192.168.1.81:3000";

export default axios.create({
    baseURL: workUrl
});