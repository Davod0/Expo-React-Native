import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';
import {Text} from'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


type RootStackParamList = {
  Home: undefined;
  Setting: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen}
           options={({ navigation }) => ({
                headerTitle:"Home page",
                "headerRight":(props) => 
                    <MaterialIcons
                        name="settings-suggest"
                        size={24}
                        color={props.tintColor}
                        onPress={() => navigation.navigate("Setting")}
                    />
           })}/>

        <RootStack.Screen name="Setting" component={SettingScreen} options={{headerTitle:"Home page"}}/>
      </RootStack.Navigator>
  );
}


