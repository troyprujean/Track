import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from '../components/Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.linkText}>{text}</Text>
            </Spacer>                
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({    
    linkText: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);