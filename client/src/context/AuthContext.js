import createDataContext from "./createDataContext";
import trackerAPI from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error': 
            return {...state, errorMessage: action.payload}
        case 'signin': 
            return {token: action.payload, errorMessage: ''}
        default: 
            return state;
    }
}

function signup (dispatch) {
    return async ({email, password}) => {
        try {
            const response = await trackerAPI.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigate('mainFlow');
        } catch (err) {
            console.error(err.message);
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'})
        }
    }
}

function signin (dispatch) {
    return async ({email, password}) => {
        try {
            const response = await trackerAPI.post('/signin', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});
            navigate('mainFlow');
        } catch (err) {
            console.error(err.message);
            dispatch({type: 'add_error', payload: 'Something went wrong with sign in'})
        }
    }
}

function signout (dispatch) {
    return ({email, password}) => {
        
    }
}

export const {Provider, Context} = createDataContext(authReducer, {signup, signin, signout}, {token: null, errorMessage: ''});
