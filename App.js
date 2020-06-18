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
import SuccessBook from './src/pages/WriteBook/Success';
import { setCustomText } from 'react-native-global-props';
import { darkMode } from './src/utils/settingsApp';

const dark = darkMode();
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

const headerScreen = {
  headerStyle: { backgroundColor: dark ? colors.black : colors.white, borderBottomColor: colors.primary, borderBottomWidth: 0.5 },
  headerBackTitleStyle: { color: colors.primary },
  headerBackTitle: "Back",
  headerTintColor: colors.primary
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={headerScreen}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Book" component={Book} />
      <HomeStack.Screen name="Reviews" component={Reviews} />
    </HomeStack.Navigator>)
}

const MyBooksStack = createStackNavigator();

function MyBooksStackScreen() {
  return (
    <MyBooksStack.Navigator screenOptions={headerScreen}>
      <MyBooksStack.Screen name="My books" component={MyBooks} />
      <MyBooksStack.Screen name="Book" component={Book} />
      <MyBooksStack.Screen name="Reviews" component={Reviews} />
    </MyBooksStack.Navigator>)
}

const StoreStack = createStackNavigator();

function StoreStackScreen() {
  return (
    <StoreStack.Navigator screenOptions={headerScreen}>
      <StoreStack.Screen name="Store" component={Store} />
      <StoreStack.Screen name="Book" component={Book} />
      <StoreStack.Screen name="Reviews" component={Reviews} />
    </StoreStack.Navigator>)
}

const WriteBookStack = createStackNavigator();

function WriteBookStackScreen() {
  return (
    <WriteBookStack.Navigator screenOptions={headerScreen}>
      <WriteBookStack.Screen name="Upload" component={UploadBook} />
      <WriteBookStack.Screen name="Book's name" component={NameBook} />
      <WriteBookStack.Screen name="Book's description" component={DescriptionBook} />
      <WriteBookStack.Screen name="Book's language" component={LanguageBook} />
      <WriteBookStack.Screen name="Book uploaded" component={SuccessBook} />
    </WriteBookStack.Navigator>
  )
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={headerScreen}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <StoreStack.Screen name="Book" component={Book} />
      <StoreStack.Screen name="Reviews" component={Reviews} />
    </ProfileStack.Navigator>
  )
}

/* const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{
      headerTitle: null,headerScreen
    }}>
      <AuthStack.Screen name="Register" component={Register} options={{
        headerShown: false
      }} />
      <AuthStack.Screen name="Login" component={Login} options={{
        headerShown: false
      }} />
    </AuthStack.Navigator>
  )
}
 */

const Tab = createMaterialTopTabNavigator();

function App() {
  const dark = darkMode();

  return (
    < ThemeProvider theme={globalTheme} >
      <NavigationContainer>
        <Header />
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            console.log(route);
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Store') {
              iconName = 'cart';
            } else if (route.name === 'MyBooks') {
              iconName = 'book-open-variant';
            } else if (route.name === 'Upload') {
              iconName = 'pencil';
            } else if (route.name === 'Profile') {
              iconName = 'menu';
            }
            return <Icon name={iconName} size={26} color={color} />;
          },
        })}
          tabBarOptions={{
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.primary,
            inactiveTintColor: colors.gray3,
            indicatorStyle: { backgroundColor: colors.primary },
            style: {
              backgroundColor: dark ? colors.black : colors.white
            }
          }}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Store" component={StoreStackScreen} />
          <Tab.Screen name="MyBooks" component={MyBooksStackScreen} />
          <Tab.Screen name="Upload" component={WriteBookStackScreen} />
          <Tab.Screen name="Profile" component={ProfileStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider >
  );
}

export default App;
