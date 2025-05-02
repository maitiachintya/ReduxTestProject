import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../../themes/Colors';
import {Fonts} from '../../../themes/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.main,
  },
  contentContainerStyle: {
    paddingTop: Platform.OS == 'ios' ? 15 : 45,
    alignItems: 'center',
    paddingHorizontal: '6%',
    paddingBottom: 30,
  },
  title: {
    color: Colors.white,
    fontSize: 26,
    fontFamily: Fonts.Poppins_SemiBold,
  },
  subTitle: {
    color: Colors.grey,
    fontSize: 12,
    fontFamily: Fonts.Poppins_Regular,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 28,
  },
  v1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: Fonts.Poppins_Regular,
    marginVertical: 18,
  },
  btnAccount: {
    marginTop: 0,
    borderColor: Colors.grey,
    borderWidth: 0.5,
  },
});
