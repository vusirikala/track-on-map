import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import {Text} from '@rneui/themed';
import Map from '../components/Map';
import { Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
// import '../_mockLocation';

const TrackCreateScreen = ({isFocused}) => {
    const {addLocation} = useContext(LocationContext);
    const [err] = useLocation(isFocused, addLocation);

    //Safe Arew View makes sure that we leave some space at the top of the mobile and use only the middle area.  
    return <SafeAreaView forceInset={{top : 'always'}}>
        <Text h3>Create a Track</Text>
        <Map />
    </SafeAreaView>
}

const styles = StyleSheet.create({

})

export default withNavigationFocus(TrackCreateScreen);
