import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return {...state, currentLocation: action.payload};
        case 'start_recording':
            return {...state, recording: true};
        case 'stop_recording':
            return {...state, recording: false};
        case 'add_location': 
            return {...state, locations: [...state.location, action.payload]};
        case 'change_name': 
            return {...state, name: action.payload};
        default: 
            return state;
    }
}

function changeName (dispatch) {
    return async (name) => {
        dispatch({type: "change_name", payload: name})
    }
}

function startRecording (dispatch) {
    return async () => {
        dispatch({type: 'start_recording'})
    }
}

function stopRecording (dispatch) {
    return async () => {
        dispatch({type: 'stop_recording'})
    }
}

function addLocation (dispatch) {
    return async (location, recording) => {
        dispatch({type: 'add_current_location', payload: location})
        if (recording) {
            dispatch({type: 'add_location', payload: location})    
        }
    }
}

export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation, changeName}, 
    {recording: false, locations: [], currentLocation: null, name: ''}
)