import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './src/components/Header';
import Tabs from './src/components/Tabs';
import Home from './src/pages/Home';
import MyBooks from './src/pages/MyBooks';
import Store from './src/pages/Store';
import Book from './src/pages/Book';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <Header />
      <Tabs />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Book" component={Book} options={{title: ''}} />
          <Stack.Screen name="Store" component={Store} options={{title: ''}} />
          <Stack.Screen
            name="MyBooks"
            component={MyBooks}
            options={{title: ''}}
          />
          <Stack.Screen name="Home" component={Home} options={{title: ''}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
