import {useState, useEffect} from 'react';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

function useLocation (shouldTrack, callback) {
    const [err, setErr] = useState(null);
    
    useEffect(() => {
        let subscriber;
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
                console.log(subscriber);
                subscriber = sub;
                
            } catch (e) {
              setErr(e);
            }
        };
    

        if (shouldTrack) {
            console.log("Start watching")
            startWatching();
        } else {
            console.log("Stop watching")
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }

        //This function is called the next time useEffect is called. 
        return () => {
            console.log("Subscriber removed 1")
            if (subscriber) {
                subscriber.remove();
                subscriber = null;
            }
        }
    }, [shouldTrack, callback])

    return [err];
}

export default useLocation;