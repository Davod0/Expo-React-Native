import { StyleSheet, Text, View } from "react-native";


export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text>favorites Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});