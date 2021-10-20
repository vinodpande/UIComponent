import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const ItemGroup = () => {
  return (
    <View style={style.container}>
      <Text style={style.circle}>1</Text>
      <Text style={style.text}>Hello From Vinod</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    alignItems: 'flex-start',
    margin: 4,
    padding: 2,
  },
  circle: {
    color: '#ffffff',
    backgroundColor: 'red',
    borderRadius: 10,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
  },
  text: {
    color: '#ffffff',
    padding: 2,
    marginLeft: 8,
  },
});
export default ItemGroup;
