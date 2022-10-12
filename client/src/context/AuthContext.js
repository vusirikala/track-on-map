import createDataContext from "./createDataContext";
import trackerAPI from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'clear_error_message': 
            return {...state, errorMessage: ''}
        case 'add_error': 
            return {...state, errorMessage: action.payload}
        case 'signin': 
            return {token: action.payload, errorMessage: ''}
        default: 
            return state;
    }
}

function tryLocalSignin (dispatch) {
    return async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            dispatch({type: 'signin', payload: token})
            navigate('TrackList');
        } else {
            navigate('LoginFlow')
        }
    }
}


function clearErrorMessage (dispatch) {
    return async () => {
        dispatch ({type : 'clear_eror_message'})
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

export const {Provider, Context} = createDataContext(authReducer, {signup, signin, signout, clearErrorMessage, tryLocalSignin}, {token: null, errorMessage: ''});
