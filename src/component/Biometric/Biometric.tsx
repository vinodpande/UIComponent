import ReactNativeBiometrics from 'react-native-biometrics';

const Biometrics = () => {
  ReactNativeBiometrics.isSensorAvailable().then(resultObject => {
    const {available, biometryType} = resultObject;

    if (available && biometryType === ReactNativeBiometrics.TouchID) {
      console.log('TouchID is supported');
    } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
      console.log('FaceID is supported');
    } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
      console.log('Biometrics is supported');
    } else {
      console.log('Biometrics not supported');
    }
  });
};

export default Biometrics;
