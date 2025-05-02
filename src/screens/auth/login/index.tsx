import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../../themes/Colors';
import TextInput from '../../../components/TextInput';
import {Icons} from '../../../themes/Icons';
import Button from '../../../components/Button';
import CheckBox from '../../../components/CheckBox';
import {styles} from './styles';
import showMessage from '../../../utils/helper/showMessage';
import {useNavigation} from '@react-navigation/native';

const index = (props: any) => {
  const navigation: any = useNavigation();
  const [email, setEmail] = useState(props?.route?.params?.email || '');
  const [password, setPassword] = useState(
    props?.route?.params?.password || '',
  );
  const [showFocus, setShowFocus] = useState<string | null>(null);  
  const [isSequre, setIsSequre] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const pwdRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  function isValid() {
    if (email === '') {
      showMessage('Email is required');
    } else if (!emailRegex.test(email.toLowerCase())) {
      showMessage('Invalid Email address');
    } else if (password === '') {
      showMessage('Password is required');
    } else if (!pwdRegex.test(password)) {
      showMessage('Invalid Password');
    } else {
      showMessage('Login successfully..');
      navigation.navigate('Dashboard')
    }
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.main}}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'android' ? 'padding' : 'height'}>
        <StatusBar backgroundColor={Colors.main} barStyle={'light-content'} />
        <ScrollView
          style={styles.main}
          contentContainerStyle={styles.contentContainerStyle}>
          <Text style={styles.title}>Login Account</Text>
          <Text style={styles.subTitle}>
            Lorem Ipsum, giving information on its origins, as well as a random
            Lipsum generator.
          </Text>

          <TextInput
            value={email}
            onChangeText={v => setEmail(v)}
            placeholder="Email Address"
            onFocus={() => setShowFocus('email')}
            onBlur={() => setShowFocus(null)}
            focused={showFocus === 'email'}
            icon={{uri: Icons.email}}
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
              box={show ? {uri: Icons.showCheck} : {uri: Icons.emptyCheck}}
              disable={false}
              onPress={() => setShow(!show)}
            />
            <Text style={[styles.text, {marginLeft: 8}]}>Save Password</Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={styles.text}>Forgot Password?</Text>
            </View>
          </View>
          <Button
            title="Login Account"
            backgroundColor={Colors.red}
            onPress={isValid}
            style={{
              marginTop: 0,
            }}
          />
          <Text style={styles.text}>Or, Login with</Text>
          <Button
            title="Login with Google"
            backgroundColor={Colors.blue}
            onPress={() => navigation.navigate('Register')}
            style={{
              marginTop: 0,
            }}
          />

          <Button
            title="Login with Facebook"
            backgroundColor={Colors.yellow}
            onPress={() => navigation.navigate('Register')}
          />
          <Text style={styles.text}>Don't have an account?</Text>
          <Button
            title="Create Account"
            backgroundColor={Colors.main}
            onPress={() => navigation.navigate('Register')}
            style={styles.btnAccount}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default index;
