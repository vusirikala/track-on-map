import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

function useSaveTrack() {
    const {createTrack} = useContext(TrackContext);
    const {state: {locations, name}, reset} = useContext(LocationContext);

    async function saveTrack() {
        await createTrack(name, locations);
        reset();
    }
    return [saveTrack]
}

export default useSaveTrack;