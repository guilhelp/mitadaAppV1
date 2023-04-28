import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Details from './app/screens/Details';
import Login from './app/screens/Login';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator();

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(()=>{
    onAuthStateChanged
  })
  
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='igite sua agenda de mitagem de hoje:'>
          <Stack.Screen name="Digite sua agenda de mitagem de hoje:" component={List}/>
          <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mitadaText:{
      marginTop: 100,
     fontSize: 34,

  },
})

