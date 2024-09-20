import { MaterialIcons } from '@expo/vector-icons'; // Se till att du importerar rätt paket
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Om du använder Tab.Navigator
import FavoritesScreen from '../screens/favoritesScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export type TabParamList = {
    Home: undefined;
    Favorites: undefined;
}

export default function TabNavigator() {
    return (
        <Tab.Navigator 
         screenOptions={({ navigation }) => ({
                headerRight: (props) => (
                    <MaterialIcons
                       style={{ marginRight: 16 }}
                        name="settings-suggest"
                        size={24}
                        color={props.pressColor}
                        onPress={() => navigation.navigate("Setting")}
                    />
                ),
         })}>
            <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarIcon: (props) => <MaterialIcons name="home" size={24} color={props.color} />,
                }}
            />
            <Tab.Screen name="Favorites" component={FavoritesScreen}
               options={{
                   tabBarIcon: (props) => <MaterialIcons name="favorite" size={24} color={props.color} />,
               }}
             />
        </Tab.Navigator>
    );
}
