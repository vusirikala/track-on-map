import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'https://0ae5-70-115-19-3.ngrok.io'
})

//The first function argument is called whenever we make a request
//The second function argument is called whenever there is an error in making request (like a connection error) 
instance.interceptors.request.use(
    //config object has information about the request, such as url, method, headers.  
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
)


export default instance;

