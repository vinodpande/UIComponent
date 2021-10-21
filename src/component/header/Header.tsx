import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {THeaderProps} from './types';

const Header: React.FC<THeaderProps> = ({
  containerStyle,
  textStyle,
  iconLeft = {name: 'chevron-left'},
  iconRight = {name: 'times'},
  title = 'Back',
  onBack,
  onClose,
}) => {
  const sizeLeft = iconLeft?.size ? iconLeft.size : 15;
  const colorLeft = iconLeft?.color ? iconLeft.color : '#6000000';
  const sizeRight = iconRight?.size ? iconRight.size : 20;
  const colorRight = iconRight?.color ? iconRight.color : '#6000000';
  return (
    <View style={[style.container, containerStyle]}>
      {iconLeft ? (
        <Icon
          name={iconLeft.name}
          size={sizeLeft}
          color={colorLeft}
          onPress={() => {
            onBack();
          }}
        />
      ) : null}
      <Text style={[style.text, textStyle]}>{title}</Text>
      {iconRight ? (
        <Icon
          name={iconRight.name}
          size={sizeRight}
          color={colorRight}
          onPress={() => {
            onClose();
          }}
        />
      ) : null}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  text: {
    width: '90%',
    color: '#6000000',
    fontSize: 14,
    paddingLeft: 10,
  },
});

export default Header;
