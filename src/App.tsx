import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';
import {RecoilRoot} from 'recoil';
import {TodoListStackNavigation} from './navigation/stack.navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <RecoilRoot>
      {/* <SafeAreaView style={backgroundStyle}> */}
      <NavigationContainer>
        <TodoListStackNavigation />
      </NavigationContainer>
      {/* </SafeAreaView> */}
    </RecoilRoot>
  );
};

export default App;
