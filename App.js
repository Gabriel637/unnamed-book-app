import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from './src/styles/Colors';
import Header from './src/components/Header';
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
import { setCustomText } from 'react-native-global-props';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const fontDefaultName = 'Baskerville';

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
    fontFamily: 'EuphemiaUCAS',
  },
};

setCustomText(customText);

function App() {
  return (
    < ThemeProvider theme={globalTheme} >
      <Header />
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color={color} />;
          },
        })}
          tabBarOptions={{
            activeTintColor: colors.primary,
            inactiveTintColor: 'gray',
            indicatorStyle: { backgroundColor: colors.primary }
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Store" component={Store} />
          <Tab.Screen name="Upload" component={UploadBook} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="DescriptionBook" component={DescriptionBook} />
        <Stack.Screen name="LanguageBook" component={LanguageBook} />
        <Stack.Screen name="NameBook" component={NameBook} />
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="MyBooks" component={MyBooks} />
      </NavigationContainer>
    </ThemeProvider >
  );
}

export default App;
