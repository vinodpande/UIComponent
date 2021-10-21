import React from 'react';
import {View, Text} from 'react-native';
import Button from '../component/button/Button';
import ItemGroup from '../component/ItemGroup';

const Home = () => {
  return (
    <View style={{backgroundColor: '#EEEEEE'}}>
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
