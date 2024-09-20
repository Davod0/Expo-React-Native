import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../Navigator/RootStackNavigator";
import { TabParamList } from "../Navigator/TabNavigator";


type Props = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, "Setting">,  BottomTabScreenProps<TabParamList>
>

export default function SettingScreen(props: Props) {
  
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
      <Button title="Go to favorites" onPress={() => props.navigation.navigate("Favorites")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});