import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import Spacer from '../components/Spacer';
import '../_mockLocation';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);
    const callBack = useCallback((location) => {
        addLocation(location, recording);
    }, [recording]);

    const [err] = useLocation(isFocused || recording, callBack);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Spacer>
                <Text h2>Create a Track</Text>
                <Spacer />
                <Map />
                {err ? <Text style={styles.errorMessage}>Please enable location services</Text> : null}
                <TrackForm />
            </Spacer>            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginHorizontal: 15
    }
});

export default withNavigationFocus(TrackCreateScreen);