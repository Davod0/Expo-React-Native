import { MaterialIcons } from '@expo/vector-icons'; // Se till att du importerar rätt paket
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Om du använder Tab.Navigator
import FavoritesScreen from '../screens/favoritesScreen';
import HomeScreen from '../screens/HomeScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator 
         screenOptions={({ navigation }) => ({
                headerRight: (props) => (
                    <MaterialIcons
                        name="settings-suggest"
                        size={24}
                        color={props.tintColor}
                        onPress={() => navigation.navigate("Setting")}
                    />
                ),
         })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
    );
}
