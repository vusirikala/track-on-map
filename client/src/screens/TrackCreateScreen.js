import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {Text} from '@rneui/themed';
import Map from '../components/Map';
import { requestForegroundPermissionsAsync } from 'expo-location';

const TrackCreateScreen = () => {

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            if (!granted) {
            throw new Error('Location permission not granted');
          }
        } catch (e) {
          setErr(e);
        }
      };

    //Safe Arew View makes sure that we leave some space at the top of the mobile and use only the middle area.  
    return <SafeAreaView forceInset={{top : 'always'}}>
        <Text h3>Create a Track</Text>
        <Map />
    </SafeAreaView>
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen;
