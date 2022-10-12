import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';


const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return <View>
        <Text>Account screen</Text>
        <Spacer>
            <Button title="sign out" onPress={signout} />
        </Spacer>
    </View>
}

const styles = StyleSheet.create({

})

export default AccountScreen;
