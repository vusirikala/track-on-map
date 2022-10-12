import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    //NavigationEvents doesn't display anything on the screen. 
    //Instead, we can choose to pass a few callback functions as props. 
    //These callback functions are called whenever we navigate into the Signin screen or navigate away from the screen. 
    return <View style={styles.container}>
        <NavigationEvents 
            onWillFocus={clearErrorMessage}  //Called anytime we are about to navigate into the screen
        />

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
