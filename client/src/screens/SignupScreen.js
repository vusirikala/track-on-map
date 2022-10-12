import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignupScreen = () => {
    const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);

    return <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}  //Called anytime we are about to navigate into the screen
        />
        <AuthForm 
            headerText="Sign Up for Tracker"
            errorMessage={state.errorMessage}
            onSubmit={signup}
            submitButtonText="Sign up"
        />
        <NavLink routeName="Signin" 
            text="Already have an account? Signin instead"
        />
    </View>
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },

})

export default SignupScreen;
