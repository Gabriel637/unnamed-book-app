import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'styled-components';
import Header from './src/components/Header';
import Tabs from './src/components/Tabs';
import Home from './src/pages/Home';
import MyBooks from './src/pages/MyBooks';
import Store from './src/pages/Store';
import Book from './src/pages/Book';
import Reviews from './src/pages/Reviews';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Profile from './src/pages/Profile';
import UploadBook from './src/pages/WriteBook/Upload';
import NameBook from './src/pages/WriteBook/Name';
import DescriptionBook from './src/pages/WriteBook/Description';
import LanguageBook from './src/pages/WriteBook/Language';
import {setCustomText} from 'react-native-global-props';

const Stack = createStackNavigator();

const fontDefaultName = 'OpenSans';

const globalTheme = {
  primary: 'red',
  font: {
    light: `${fontDefaultName}-Light`,
    semiBold: `${fontDefaultName}-SemiBold`,
    bold: `${fontDefaultName}-Bold`,
    extraBold: `${fontDefaultName}-ExtraBold`,
  },
};

const customText = {
  style: {
    fontFamily: 'OpenSans-Regular',
  },
};

setCustomText(customText);

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Header />
      <Tabs />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="DescriptionBook" component={DescriptionBook} />
          <Stack.Screen name="LanguageBook" component={LanguageBook} />
          <Stack.Screen name="NameBook" component={NameBook} />
          <Stack.Screen name="UploadBook" component={UploadBook} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Book" component={Book} />
          <Stack.Screen name="Reviews" component={Reviews} />
          <Stack.Screen name="MyBooks" component={MyBooks} />
          <Stack.Screen name="Store" component={Store} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
