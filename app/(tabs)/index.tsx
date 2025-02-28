import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Image, ImageSource } from "expo-image";
import { ImageViewer } from "@/components/ImageViewer";
import { Button } from "@/components/Button";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { EmojiPicker } from "@/components/EmojiPicker";
import { EmojiList } from "@/components/EmojiList";
import { EmojiSticker } from "@/components/EmojiSticker";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<{
    uri: string;
  } | null>(null);

  const [showAppOptions, setShowAppOptions] = useState(false);

  const [isEmojiPickerVisible, setisEmojiPickerVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<ImageSource | null>(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage({ uri: result.assets[0].uri });
      setShowAppOptions(true);
    } 
  }
  
  const handleModalClose = () => {
    setisEmojiPickerVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage ?? PlaceholderImage} />
        {selectedEmoji && <EmojiSticker imageSize={40} imgSource={selectedEmoji} />}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <Button 
              label="Reset" 
              icon={<FontAwesome name='undo' size={16}  color='#fff' style={styles.resetButtonIcon} />} 
              onClick={() => setShowAppOptions(false)} 
              wrapperStyles={[styles.resetButtonWrapper]}
              buttonStyles={[styles.resetButton]} />
            <Button 
              icon={<FontAwesome name='plus' size={38}  color='#25292e' />} 
              onClick={() => setisEmojiPickerVisible(true)} 
              wrapperStyles={[styles.addEmojiButtonWrapper]} 
              buttonStyles={[styles.addEmojiButton]}
              />
            <Button 
              icon={<FontAwesome name='download' size={16}  color='#fff' />} 
              label="Save" 
              onClick={() => {}}
              wrapperStyles={[styles.saveButtonWrapper]}
              buttonStyles={[styles.saveButton]} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button 
            label="Choose a photo" 
            onClick={pickImageAsync} 
            icon={<FontAwesome name="picture-o" size={18} color="#25292e" />}
            wrapperStyles={[styles.choosePhotoButtonWrapper]}
            buttonStyles={[styles.choosePhotoButton]} 
            labelStyles={[styles.choosePhotoButtonLabel]} />
          <Button label="Use this photo" onClick={() => setShowAppOptions(true)} />
        </View>
    )}
    {isEmojiPickerVisible && (
      <EmojiPicker isVisible={isEmojiPickerVisible} onClose={handleModalClose}>
        <EmojiList onSelect={setSelectedEmoji} onClose={handleModalClose}/>
      </EmojiPicker>
    )}
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
  optionsContainer: {
    position: 'absolute',
    bottom: 40,
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveButtonWrapper: {
    width: 80,
  },
  saveButton: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonWrapper: {
    width: 80,
  },
  resetButton: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonIcon: {
    transform: [{ 'rotateY': '180deg' }]
  },
  addEmojiButtonWrapper: {
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 42,
    width: 84,
    height: 84,
    backgroundColor: "#fff",
  },
  addEmojiButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addEmojiButtonLabel: {
    color: "#25292e",
    fontSize: 18,
  },
  choosePhotoButtonWrapper: {
    borderWidth: 4,
    borderColor: "#ffd700",
    borderRadius: 18,
  },
  choosePhotoButton: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: "#fff",
  },
  choosePhotoButtonLabel: {
    color: "#25292e",
    fontSize: 18,
  },
});
