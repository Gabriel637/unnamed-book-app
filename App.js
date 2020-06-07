import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './src/components/Header';
import Tabs from './src/components/Tabs';
import Home from './src/pages/Home';
import MyBooks from './src/pages/MyBooks';
import Store from './src/pages/Store';
import Book from './src/pages/Book';
import Reviews from './src/pages/Reviews';

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
          <Stack.Screen name="Reviews" component={Reviews} />
          <Stack.Screen name="Store" component={Store} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Book" component={Book} />
          <Stack.Screen name="MyBooks" component={MyBooks} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
