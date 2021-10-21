import {StyleProp, ViewStyle, TextStyle} from 'react-native';

interface Ticon {
  name: string;
  size?: number;
  color?: string;
}

export interface THeaderProps {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconLeft?: Ticon;
  iconRight?: Ticon;
  title?: string;
  onBack?: any;
  onClose?: any;
}
