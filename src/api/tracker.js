import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const workUrl = "http://172.17.150.21:3000";
const homeUrl = "http://192.168.1.81:3000";

const instance = axios.create({
    baseURL: homeUrl
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;