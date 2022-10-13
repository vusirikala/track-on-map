import React, {useState} from "react";
import {View, StyleSheet} from 'react-native';
import {Text, Button, Input} from '@rneui/themed';
import Spacer from "./Spacer";

export default function AuthForm ({headerText, errorMessage, onSubmit, submitButtonText}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View style={styles.container}>
        <Spacer>
            <Text h3>{headerText}</Text>
        </Spacer>
        <Input label="Email" 
            value={email} 
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            />
        <Spacer />
        <Input label="Password" 
            value={password} 
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false} 
            secureTextEntry
            />
        {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        <Spacer>
            <Button title={submitButtonText} onPress={() => onSubmit({email, password})}/>
        </Spacer>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
    },
    link: {
        color: 'blue'
    }
})
