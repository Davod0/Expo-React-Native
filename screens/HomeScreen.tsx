import { MaterialIcons } from '@expo/vector-icons'; // Se till att du importerar rätt paket
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Photo } from "../data";



export default function HomeScreen() {

  const [photos, setPhotos] = useState<Photo[]>([]);
  console.log(photos);

  useEffect(() => {
    async function fethcer(){

      const url = "https://api.pexels.com/v1/search?query=nature&per_page=20";
      const response = await fetch(url, {headers:{Authorization: "rgvwcQ2WE1CcqY6Cil80GHIKSaZmySK3P0cqgzM0Em5IbcrHxexzTDcc"}});
      const data = await response.json();
      setPhotos(data.photos);
    }

    fethcer();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Home Screen</Text>
      {photos.map((photo)=> (
          <View key={photo.id} style={styles.card}>
              <Image source={{uri: photo.src.medium}} style={styles.image}/>

              <View style={styles.cardFotter}>
                <Text style={styles.fotterText}>{photo.photographer}</Text>
                <MaterialIcons name="favorite" size={24} color={"grey"} />
              </View>
          </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#ADD8E6'},
  card:{width:"100%", marginBottom:20},
  image:{width:"100%", height: 300},
  cardFotter:{flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:8},
  fotterText:{fontSize: 20}
});