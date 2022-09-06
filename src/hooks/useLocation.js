import { useState, useEffect } from 'react';
import { 
    Accuracy, 
    requestForegroundPermissionsAsync, 
    watchPositionAsync 
} from 'expo-location';

export default (shouldTrack, callBack) => {
    const [err, setErr] = useState(null);    
    
    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync();
                if (!granted) {
                    throw new Error('Location permission not granted');
                }
    
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10
                    }, 
                    callBack
                );
            } catch (err) {
                setErr(err);
            }
        };

        if (shouldTrack) {            
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();                
            }
            subscriber = null;
        }

        // cleanup function to return
        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };
    }, [shouldTrack, callBack]);

    return [err];
};