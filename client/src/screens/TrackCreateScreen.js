import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {Text} from '@rneui/themed';
import Map from '../components/Map';
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
// import '../_mockLocation';

const TrackCreateScreen = () => {
    const {addLocation} = useContext(LocationContext);
    const [err] = useLocation(addLocation);

    //Safe Arew View makes sure that we leave some space at the top of the mobile and use only the middle area.  
    return <SafeAreaView forceInset={{top : 'always'}}>
        <Text h3>Create a Track</Text>
        <Map />
    </SafeAreaView>
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen;
