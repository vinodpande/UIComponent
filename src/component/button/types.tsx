import {StyleProp, ViewStyle, TextStyle} from 'react-native';

interface Ticon {
  name: string;
  size?: number;
  color?: string;
}
export interface TbuttonProps {
  containerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<TextStyle>;
  iconLeft?: Ticon;
  iconRight?: Ticon;
  title: string;
  type?: 'default' | 'clear' | 'outline';
}
