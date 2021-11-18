import React from 'react';
import {View, Text, Alert, TouchableOpacity} from 'react-native';

import TouchID from 'react-native-touch-id';

const TouchIDs = () => {
  const optionalConfigObject = {
    // title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  const handleToucId = () => {
    TouchID.authenticate('', optionalConfigObject)
      .then((success: any) => {
        console.log(success);
        Alert.alert('Authenticated Successfully');
      })
      .catch((error: any) => {
        console.log(error);
        Alert.alert('Authentication Failed');
      });
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => handleToucId()}
        style={{paddingVertical: 20}}>
        <Text>Touch id</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TouchIDs;
