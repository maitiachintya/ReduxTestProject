import {View, Text} from 'react-native';
import React from 'react';
import NavigateStack from './src/navigators/StackNavigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigateStack />
    </View>
  );
};

export default App;
