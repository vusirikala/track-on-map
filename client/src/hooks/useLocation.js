import {useState, useEffect} from 'react';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

function useLocation (callback) {
    const [err, setErr] = useState(null);
    
    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }

            //This method is going to watch user's location and see a change over time. 
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,   //How accuracy do we want in the location. More accuracy means consumes higher battery power. 
                timeInterval: 1000,     //Update once every 1 sec 
                distanceInterval: 10    //Update once every 10 meters
            }, (location) => {
                // console.log(location)
                callback(location)
            })
            
        } catch (e) {
          setErr(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, [])

    return [err];
}

export default useLocation;