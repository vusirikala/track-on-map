import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const trackReducer = (state, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}

function fetchTracks (dispatch) {

}

function createTrack (dispatch) {
    return async (name, locations) => {
        await trackerApi.post('/tracks', {name, locations});
    }
}

export const {Context, Provider} = createDataContext(
    trackReducer,
    {fetchTracks, createTrack},
    {}
)
