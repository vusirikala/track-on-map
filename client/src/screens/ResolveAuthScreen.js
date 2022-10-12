import React, {useEffect, useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';

function ResolveAuthScreen() {
    const {tryLocalSignin} = useContext(AuthContext);
    useEffect(() => {
        tryLocalSignin();
    }, [])
    return <View style={styles.container}>
        <NavigationEvents onDidFocus={tryLocalSignin} />
        <Text>ResolveAuth Screen</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        color:'blue'
    }
})

export default ResolveAuthScreen;
