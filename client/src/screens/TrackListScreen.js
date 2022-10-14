import { ListItem } from '@rneui/base';
import React, {useContext} from 'react';
import {View, StyleSheet, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext} from '../context/TrackContext';


const TrackListScreen = ({navigation}) => {
    const {state, fetchTracks} = useContext(TrackContext);
    console.log(state)
    return <View>
        <NavigationEvents onWillFocus={fetchTracks} />
        <Text>TrackList screen</Text>
        <FlatList
            data={state}
            key={item => item._id}
            renderItem={({item}) => {
                return <TouchableOpacity
                    onPress={() => navigation.navigate('TrackDetail', {_id: item._id})}
                    >
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>
                                {item.name}
                            </ListItem.Title>
                            <ListItem.Chevron />
                        </ListItem.Content>
                    </ListItem> 
                </TouchableOpacity>
            }}
        />
    </View>
}

const styles = StyleSheet.create({

})

export default TrackListScreen;
