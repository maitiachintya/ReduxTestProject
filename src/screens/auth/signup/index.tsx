import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../../themes/Colors';
import TextInput from '../../../components/TextInput';
import {Icons} from '../../../themes/Icons';
import Button from '../../../components/Button';
import CheckBox from '../../../components/CheckBox';
import {styles} from './styles';
import {CountryPicker} from 'react-native-country-codes-picker';
import showMessage from '../../../utils/helper/showMessage';
import {useNavigation} from '@react-navigation/native';

const index = () => {
  const navigation: any = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phno, setPhNo] = useState('');
  const [password, setPassword] = useState('');
  const [showFocus, setShowFocus] = useState<string | null>(null);
  const [isSequre, setIsSequre] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState('+1');
  const [isTerms, setIsTerms] = useState<boolean>(false);

  const fullNameRegex = /^[A-Z][a-zA-Z]{2,15}$/;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const pwdRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  function isValid() {
    if (fullName === '') return showMessage('First Name is required');
    if (!fullNameRegex.test(fullName)) return showMessage('Invalid Full Name');
    if (fullName[0] !== fullName[0].toUpperCase())
      return showMessage('First Letter should be capital');
    if (email === '') {
      showMessage('Email is required');
    } else if (!emailRegex.test(email.toLowerCase())) {
      showMessage('Invalid Email address');
    } else if (phno === '') {
      showMessage('Phone Number is required');
    } else if (phno.length < 10 || phno.length > 10)
      return showMessage('Enter a valid phone number');
    else if (password === '') {
      showMessage('Password is required');
    } else if (!pwdRegex.test(password)) {
      showMessage('Invalid Password');
    } else if (!isTerms) {
      showMessage('Please select terms and conditions');
    } else {
      showMessage('Signup successfully..');
      navigation.navigate('Login', {
        email: email.toLowerCase(),
        password: password,
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'android' ? 'padding' : 'height'}>
        <StatusBar backgroundColor={Colors.main} barStyle={'light-content'} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.main}
          contentContainerStyle={styles.contentContainerStyle}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subTitle}>
            Lorem Ipsum, giving information on its origins, as well as a random
            Lipsum generator.
          </Text>

          <TextInput
            value={fullName}
            onChangeText={v => setFullName(v)}
            placeholder="Full Name"
            onFocus={() => setShowFocus('name')}
            onBlur={() => setShowFocus(null)}
            focused={showFocus === 'name'}
            icon={{uri: Icons.profile}}
          />

          <TextInput
            value={email}
            onChangeText={v => setEmail(v)}
            placeholder="Email Address"
            onFocus={() => setShowFocus('email')}
            onBlur={() => setShowFocus(null)}
            focused={showFocus === 'email'}
            icon={{uri: Icons.email}}
          />

          {/* Phone Number Input with Country Code */}
          <View style={styles.phoneWrapper}>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={styles.touchFlag}>
              <Text style={styles.flagIconText}>{countryCode}</Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
              }}>
              <TextInput
                value={phno}
                onChangeText={v => setPhNo(v)}
                placeholder="Phone Number"
                onFocus={() => setShowFocus('phno')}
                onBlur={() => setShowFocus(null)}
                focused={showFocus === 'phno'}
                icon={{uri: Icons.phone}}
                containerStyle={{marginTop: 0}}
                keyboardType="numeric"
              />
            </View>
          </View>

          <CountryPicker
            show={show}
            // when picker button press you will get the country object with dial code
            pickerButtonOnPress={item => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
            style={{
              modal: {
                height: 450,
              },
              dialCode: {
                fontSize: 12,
              },
              flag: {
                fontSize: 18,
              },
              line: {
                height: 2,
              },
            }}
            lang="en"
            // ListHeaderComponent={ListHeaderComponent}
            popularCountries={['en', 'ua', 'pl']}
          />

          <TextInput
            value={password}
            onChangeText={v => setPassword(v)}
            placeholder="Password"
            icon={isSequre ? {uri: Icons.invisible} : {uri: Icons.visible}}
            disable={false}
            onFocus={() => setShowFocus('password')}
            onBlur={() => setShowFocus(null)}
            focused={showFocus === 'password'}
            onPress={() => setIsSequre(!isSequre)}
            secureTextEntry={isSequre}
          />
          <View style={styles.v1}>
            <CheckBox
              box={isTerms ? {uri: Icons.showCheck} : {uri: Icons.emptyCheck}}
              disable={false}
              onPress={() => setIsTerms(!isTerms)}
            />
            <Text style={[styles.text, {marginLeft: 8}]}>
              Agree with Terms & Conditions
            </Text>
          </View>
          <Button
            title="Create Account"
            backgroundColor={Colors.red}
            onPress={() => isValid()}
            style={{
              marginTop: 0,
            }}
          />
          <Text style={styles.text}>Or, Register with</Text>
          <Button
            title="Sign Up with Google"
            backgroundColor={Colors.blue}
            onPress={() => {}}
            style={{
              marginTop: 0,
            }}
          />

          <Button
            title="Sign Up with Facebook"
            backgroundColor={Colors.yellow}
            onPress={() => {}}
          />
          <Text style={styles.text}>Already have an account?</Text>
          <Button
            title="Back to Login"
            backgroundColor={Colors.main}
            onPress={() => navigation.navigate('Login')}
            style={styles.btnAccount}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default index;
