import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const id = navigation.getParam('id');

    const track = state.find(x => x._id === id);
    const initialCoords = track.locations[0].coords;

    return (
        <>
            <Text style={{ fontSize: 48 }}>{track.name}</Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map}
            >
                <Polyline coordinates={track.locations.map(x => x.coords)} />
            </MapView>
        </>
    ); 
};

TrackDetailScreen.navigationOptions = {
    title: ''
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackDetailScreen;