import React, {useCallback, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import {Text} from '@rneui/themed';
import Map from '../components/Map';
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
// import '../_mockLocation';

const TrackCreateScreen = ({isFocused}) => {
    const {state, addLocation} = useContext(LocationContext);
    
    //Creates a new callback only when state.recording changes. 
    //useCallback simply returns the callback function passed as the first argument, whenever the second argument changes.  
    //When the second argument doesn't change, but the first argument changes, the useCallback will still return the old callback (not the new one). 
    const callback = useCallback( (location) => {
       addLocation(location, state.recording)
    }, [state.recording]);

    const [err] = useLocation(isFocused || state.recording, callback);

    //Safe Arew View makes sure that we leave some space at the top of the mobile and use only the middle area.  
    return <SafeAreaView forceInset={{top : 'always'}}>
        <Text h3>Create a Track</Text>
        <Map />
        <TrackForm />
    </SafeAreaView>
}

const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen);
