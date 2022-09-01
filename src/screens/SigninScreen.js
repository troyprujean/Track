import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm 
                headerText="Sign In to your Account"
                errorMessage= ""
                onSubmit={() => {}}
                submitButtonText="Sign In"
            />
            <NavLink
                routeName='Signup'
                text="Don't have an account? Sign up instead"
            />
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default SigninScreen;