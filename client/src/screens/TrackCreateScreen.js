import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {Text} from '@rneui/themed';
import Map from '../components/Map';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
// import '../_mockLocation';

const TrackCreateScreen = () => {

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
                console.log(location)
            })
            
        } catch (e) {
          setErr(e);
        }
      };

    useEffect(() => {
        startWatching();
    }, [])

    //Safe Arew View makes sure that we leave some space at the top of the mobile and use only the middle area.  
    return <SafeAreaView forceInset={{top : 'always'}}>
        <Text h3>Create a Track</Text>
        <Map />
    </SafeAreaView>
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen;
