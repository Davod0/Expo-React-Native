import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from '../screens/HomeScreen';


type RootStackParamList = {
  Home: undefined;
  Setting: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} options={{headerTitle:"Home page"}}/>
      </RootStack.Navigator>
  );
}


