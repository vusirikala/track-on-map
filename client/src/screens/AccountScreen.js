import React, {useContext} from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import {Button} from '@rneui/themed';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; 


const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return <SafeAreaView style={styles.container}>
        <Spacer>
            <Button title="sign out" onPress={signout} />
        </Spacer>
    </SafeAreaView>
}

AccountScreen.navigationOptions = {
    title: 'Settings',
    tabBarIcon: <Ionicons name="settings-sharp" size={24} color="black" />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3B5323",
        marginTop: StatusBar.currentHeight
    }
})

export default AccountScreen;
