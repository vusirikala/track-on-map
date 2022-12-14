import React, {useContext} from 'react';
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

function Map () {

    // let points = []
    // for (let i = 0; i < 20; i++) {
    //     points.push({
    //         latitude: 37.33233 + i * 0.001,
    //         longitude: -122.03121 + i * 0.001
    //     })
    // }
    // return <MapView 
    // style={styles.map}
    // initialRegion={{
    //     latitude: 37.33233,
    //     longitude: -122.03121,
    //     latitudeDelta: 0.01,
    //     longitudeDelta: 0.01
    // }}
    // >
    //     <Polyline coordinates={points}/>
    // </MapView>

    const {state : {currentLocation, locations}} = useContext(LocationContext);
    
    if (!currentLocation) {
        //This is a spinner to show loading. 
        return <ActivityIndicator size="large" style={{marginTop: 200}} />
    }

    return <MapView 
    style={styles.map}
    initialRegion={{        //What the map should show when it is first rendered on the screen. 
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }}
    region={{               //This is to track the user. When the region is property is updated, the map will automatically recenter and rezoom on the user. 
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }}
    >
        <Circle 
            center={currentLocation.coords}
            radius={30}
            strokeColor="rgba(158,158,255,1.0)"     //This is the border color. 4th value is the opacity. 
            fillColor="rgba(158,158,255,0.3)"
        />
        <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>



}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map;
