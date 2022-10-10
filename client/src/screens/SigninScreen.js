import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
    const {state, signin} = useContext(AuthContext);

    return <View style={styles.container}>
        <AuthForm 
            headerText="Sign In"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitButtonText="Sign in"
        />
        <NavLink routeName="Signup" 
            text="Don't have an account? Sigup instead"
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },
})

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}


export default SigninScreen;
