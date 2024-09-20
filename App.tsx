import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import RootStackNavigator from './Navigator/RootStackNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStackNavigator/>
    </NavigationContainer>
  );
}


