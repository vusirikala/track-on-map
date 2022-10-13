import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from '@rneui/themed';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';


const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return <SafeAreaView forceInset={{top: 'always'}}>
        <Text>Account screen</Text>
        <Spacer>
            <Button title="sign out" onPress={signout} />
        </Spacer>
    </SafeAreaView>
}

const styles = StyleSheet.create({

})

export default AccountScreen;
