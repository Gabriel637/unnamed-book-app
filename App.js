import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from './src/styles/Colors';
import { MaterialCommunityIcons as Icon } from './src/styles/LoadFonts';
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
import { darkMode } from './src/utils/settingsApp';

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

function Tabs() {
  <NavigationContainer>
    <Header />
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: focused => {
        let iconName;
        let color;
        if (route.name === 'Home') {
          iconName = 'home';
          color = focused ? colors.primary : colors.gray3;
        } else if (route.name === 'Settings') {
          iconName = 'gear';
          color = focused ? colors.primary : colors.gray3;
        }
        return <Icon name={iconName} size={30} color={color} />;
      },
    })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
        indicatorStyle: { backgroundColor: colors.primary },
        style: {
          backgroundColor: dark ? colors.black : colors.white
        }
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Store" component={Store} />
      <Tab.Screen name="Upload" component={UploadBook} />
      <Tab.Screen name="Profile" component={Profile} />
      <Stack.Screen name="MyBooks" component={MyBooks} />
    </Tab.Navigator>
  </NavigationContainer>
}

function App() {
  const dark = darkMode();

  return (
    < ThemeProvider theme={globalTheme} >
      <NavigationContainer>
        <Header />
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: focused => {
            let iconName;
            let color;
            if (route.name === 'Home') {
              iconName = 'home';
              color = focused ? colors.primary : colors.gray3;
            } else if (route.name === 'Settings') {
              iconName = 'gear';
              color = focused ? colors.primary : colors.gray3;
            } else if (route.name === 'Store') {
              iconName = 'cart';
              color = focused ? colors.primary : colors.gray3;
            } else if (route.name === 'MyBooks') {
              iconName = 'book-open-variant';
              color = focused ? colors.primary : colors.gray3;
            } else if (route.name === 'Upload') {
              iconName = 'pencil';
              color = focused ? colors.primary : colors.gray3;
            } else if (route.name === 'Profile') {
              iconName = 'menu';
              color = focused ? colors.primary : colors.gray3;
            }
            return <Icon name={iconName} size={26} color={color} />;
          },
        })}
          tabBarOptions={{
            showIcon: true,
            showLabel: false,
            indicatorStyle: { backgroundColor: colors.primary },
            style: {
              backgroundColor: dark ? colors.black : colors.white
            }
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Store" component={Store} />
          <Stack.Screen name="MyBooks" component={MyBooks} />
          <Tab.Screen name="Upload" component={UploadBook} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>{/* 
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTitle: null,
          headerStyle: { backgroundColor: dark ? colors.black : colors.white },
          headerBackTitleStyle: { color: colors.primary },
          headerTintColor: colors.primary
        }}>
          <Stack.Screen name="Register" component={Register} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Login" component={Login} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Book" component={Book} />
          <Stack.Screen name="DescriptionBook" component={DescriptionBook} />
          <Stack.Screen name="LanguageBook" component={LanguageBook} />
          <Stack.Screen name="NameBook" component={NameBook} />
          <Stack.Screen name="Reviews" component={Reviews} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </ThemeProvider >
  );
}

export default App;
