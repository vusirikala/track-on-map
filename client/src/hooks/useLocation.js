import {useState, useEffect} from 'react';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

function useLocation (shouldTrack, callback) {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }

            //This method is going to watch user's location and see a change over time. 
            //To stop tracking user's location, call subscriber.remove();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,   //How accuracy do we want in the location. More accuracy means consumes higher battery power. 
                timeInterval: 1000,     //Update once every 1 sec 
                distanceInterval: 10    //Update once every 10 meters
            }, (location) => {
                // console.log(location)
                callback(location)
            })
            setSubscriber(sub);
            
        } catch (e) {
          setErr(e);
        }
    };

    const stopWatching = async () => {
        subscriber.remove();
        setSubscriber(null);
    }

    useEffect(() => {
        if (shouldTrack) {
            startWatching();
        } else {
            stopWatching();
        }
    }, [shouldTrack])

    return [err];
}

export default useLocation;