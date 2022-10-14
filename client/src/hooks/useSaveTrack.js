import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

function useSaveTrack() {
    const {createTrack} = useContext(TrackContext);
    const {state: {locations, name}} = useContext(LocationContext);

    function saveTrack() {
        createTrack(name, locations);

    }
    return [saveTrack]
}

export default useSaveTrack;