import React, {useEffect, useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';

function ResolveAuthScreen() {
    const {tryLocalSignin} = useContext(AuthContext);
    useEffect(() => {
        tryLocalSignin()
    }, [])
    return <View style={styles.container}>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        color:'blue'
    }
})

export default ResolveAuthScreen;
