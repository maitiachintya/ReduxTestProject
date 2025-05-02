import {
  View,
  Text,
  TextInput as Input,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextStyle,
  Platform,
  KeyboardTypeOptions,
} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../themes/Colors';
import {Fonts} from '../themes/Fonts';

interface TextInputProps {
  value: string;
  onChangeText: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  icon?: any;
  style?: StyleProp<TextStyle>;
  placeholder: string;
  placeholderColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  disable?: boolean;
  editable?: boolean;
  onPress?: () => void;
  focused?: boolean;
  focusedInput?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const TextInput: FC<TextInputProps> = ({
  onChangeText = () => {},
  placeholder,
  value,
  containerStyle,
  icon,
  style,
  onBlur = () => {},
  onFocus = () => {},
  placeholderColor = Colors.grey,
  disable = true,
  editable = true,
  focused,
  onPress = () => {},
  secureTextEntry = false,
  keyboardType = 'default',
}) => {
  return (
    <View
      style={[
        styles.container,
        focused && styles.focusedInput,
        containerStyle,
      ]}>
      <Input
        editable={editable}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        style={[styles.input, style]}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      <TouchableOpacity
        onPress={onPress}
        disabled={disable}
        style={styles.touch}>
        {icon && <Image source={icon} style={styles.icon} />}
      </TouchableOpacity>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    height: 58,
    width: '100%',
    backgroundColor: Colors.dark,
    marginTop: 12,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    color: Colors.grey,
    fontFamily: Fonts.Poppins_Regular,
    fontSize: Platform.OS == 'ios' ? 14 : 12,
  },
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 50,
  },
  icon: {
    resizeMode: 'contain',
    height: 15,
    width: 15,
    tintColor: Colors.grey,
  },
  focusedInput: {
    borderColor: Colors.grey,
    borderWidth: 1,
    backgroundColor: Colors.deepdark,
  },
});
