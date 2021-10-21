import React from 'react';
import {View, Text, Alert} from 'react-native';
import Button from '../component/button/Button';
import Header from '../component/header/Header';
import ItemGroup from '../component/ItemGroup';

const onBack = () => {
  Alert.alert('Back');
};
const onClose = () => {
  Alert.alert('Close');
};

const Home = () => {
  return (
    <View style={{backgroundColor: '#EEEEEE'}}>
      <Header onBack={onBack} onClose={onClose} />
      <Text>Test Component</Text>
      <ItemGroup />
      <Button
        title="Ok"
        iconLeft={{name: 'rocket'}}
        buttonStyle={{color: 'red'}}
      />
      <Button
        title="Ok"
        iconRight={{name: 'rocket'}}
        buttonStyle={{color: 'red'}}
      />
      <Button
        title="Ok"
        iconLeft={{name: 'rocket'}}
        iconRight={{name: 'rocket'}}
        type="outline"
      />

      <Button title="Ok" buttonStyle={{color: 'red'}} type="clear" />
    </View>
  );
};
export default Home;
