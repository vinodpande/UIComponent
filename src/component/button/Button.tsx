import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {TbuttonProps} from './types';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button: React.FC<TbuttonProps> = ({
  containerStyle,
  buttonStyle,
  iconLeft,
  iconRight,
  title,
  type,
}) => {
  const buttonType = type ? type : 'default';
  {
    if (iconLeft && iconRight) {
      const sizeLeft = iconLeft.size ? iconLeft.size : 24;
      const colorLeft = iconLeft.color ? iconLeft.color : '#900';
      const sizeRight = iconRight.size ? iconRight.size : 24;
      const colorRight = iconRight.color ? iconRight.color : '#900';
      return (
        <TouchableOpacity
          style={[style.container, style[buttonType], containerStyle]}>
          <Icon
            name={iconLeft.name}
            size={sizeLeft}
            color={colorLeft}
            style={{marginLeft: 4, marginRight: 4}}
          />
          <Text style={[style.text, buttonStyle]}>{title}</Text>
          <Icon
            name={iconRight.name}
            size={sizeRight}
            color={colorRight}
            style={{marginLeft: 4, marginRight: 4}}
          />
        </TouchableOpacity>
      );
    }

    if (iconLeft) {
      const size = iconLeft.size ? iconLeft.size : 24;
      const color = iconLeft.color ? iconLeft.color : '#900';
      return (
        <TouchableOpacity
          style={[style.container, style[buttonType], containerStyle]}>
          <Icon
            name={iconLeft.name}
            size={size}
            color={color}
            style={{marginLeft: 2, marginRight: 8}}
          />
          <Text style={[style.text, style.singleIcon, buttonStyle]}>
            {title}
          </Text>
        </TouchableOpacity>
      );
    }

    if (iconRight) {
      const size = iconRight.size ? iconRight.size : 24;
      const color = iconRight.color ? iconRight.color : '#900';
      return (
        <TouchableOpacity
          style={[style.container, style[buttonType], containerStyle]}>
          <Text style={[style.text, style.singleIcon, buttonStyle]}>
            {title}
          </Text>
          <Icon
            name={iconRight.name}
            size={size}
            color={color}
            style={{marginLeft: 8, marginRight: 4}}
          />
        </TouchableOpacity>
      );
    }
  }
  return (
    <TouchableOpacity
      style={[style.container, style[buttonType], containerStyle]}>
      <Text style={[style.text, style.singleText, buttonStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 4,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
  },

  default: {
    backgroundColor: 'black',
    elevation: 2,
  },

  clear: {backgroundColor: 'transparent'},
  outline: {borderWidth: 0.5},

  text: {
    alignSelf: 'center',
    width: '80%',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  singleText: {
    width: '100%',
  },
  singleIcon: {
    width: '85%',
  },
});
export default Button;
