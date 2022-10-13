import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

function startRecording (dispatch) {

}

function stopRecording (dispatch) {
    
}

function addLocation (dispatch) {
    
}

export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation}, 
    {recording: false, locations: [], currentLocation: null}
)