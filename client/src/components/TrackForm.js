import React, {useContext} from 'react';
import { View } from 'react-native';
import {Input, Button} from '@rneui/themed';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
function TrackForm () {
    const { state: {name, recording, locations}, startRecording, stopRecording, changeName} = useContext(LocationContext);
    console.log(locations.length);

    return <View>
        <Spacer>
            <Input placeholder="Enter name" value={name} onChangeText={changeName}/>
        </Spacer>
        {recording 
            ? <Button title="Stop" onPress={stopRecording}/>
            : <Button title="Start Recording" onPress={startRecording}/>
        }
    </View>;
}

export default TrackForm;
