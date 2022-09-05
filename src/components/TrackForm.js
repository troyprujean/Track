import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
    const { 
        state: {name, recording, locations}, 
        startRecording, 
        stopRecording, 
        changeTrackName 
    } = useContext(LocationContext);

    console.log(locations.length);

    return (
        <>
            <Spacer />
            <Input 
                value={name}
                onChangeText={changeTrackName} 
                placeholder='Enter Track Name' 
            />
            <Spacer />
            {
                recording 
                ? <Button title="Stop" onPress={stopRecording} /> 
                : <Button title="Start Recording" onPress={startRecording} />   
            }                         
        </>
    );
};

export default TrackForm;