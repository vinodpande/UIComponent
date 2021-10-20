import React from 'react';
import {View, Text} from 'react-native';
const ItemGroup = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#000000',
        alignItems: 'flex-start',
        margin: 4,
        padding: 2,
      }}>
      <Text
        style={{
          color: '#ffffff',
          backgroundColor: 'red',
          borderRadius: 10,
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 8,
          paddingRight: 8,
        }}>
        1
      </Text>
      <Text
        style={{
          color: '#ffffff',
          padding: 2,
          marginLeft: 8,
        }}>
        Hello From Vinod
      </Text>
    </View>
  );
};

export default ItemGroup;
