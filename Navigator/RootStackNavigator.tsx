import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from '../screens/SettingScreen';
import TabNavigator from './TabNavigator';


export type RootStackParamList = {
  HomeNavigator: undefined;
  Setting: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
      <RootStack.Navigator>
        <RootStack.Screen name="HomeNavigator"
            component={TabNavigator} 
            options=
            {{
                headerShown: false,
            }}
        />

        <RootStack.Screen name="Setting" component={SettingScreen}
         options=
            {{
                headerBackTitle: 'Back',
            }}
        />
      </RootStack.Navigator>
  );
}


