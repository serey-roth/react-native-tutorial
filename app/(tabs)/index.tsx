import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { ImageViewer } from "@/components/ImageViewer";
import { Button } from "@/components/Button";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<{
    uri: string;
  } | null>(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage({ uri: result.assets[0].uri });
    } 
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage ?? PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button 
          label="Choose a photo" 
          onClick={() => pickImageAsync()} 
          icon={<FontAwesome name="picture-o" size={18} color="#25292e" />}
          buttonStyles={[{
            flexDirection: 'row',
            gap: 10,
            backgroundColor: "#fff",
          }]} 
          containerStyles={[{
            borderWidth: 4,
            borderColor: "#ffd700",
            borderRadius: 18,
          }]}
          labelStyles={[{
            color: "#25292e",
            fontSize: 18,
          }]} />
        <Button label="Use this photo" onClick={() => alert('You clicked me!!')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
  imageContainer: {
    flex: 1,
    paddingTop: 30,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
