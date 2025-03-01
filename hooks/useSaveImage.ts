import { useCallback, useRef } from "react";
import { Platform, View } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import domToImage from 'dom-to-image';

export function useSaveImage() {
    const imageRef = useRef<View | null>(null);

    const saveImage = useCallback(async () => {
        if (Platform.OS !== 'web') {
            try {
                const localUri = await captureRef(imageRef, {
                    height: 440,
                    quality: 1,
                });
                await MediaLibrary.saveToLibraryAsync(localUri);
                if (localUri) {
                    console.log("Screenshot saved to library");
                }
            } catch (error) {
                console.error("Failed to take screenshot", error);
            }
        } else {
            try {
                const dataUrl = await domToImage.toJpeg(imageRef.current, {
                    quality: 0.95,
                    width: 320,
                    height: 440,
                });
          
                let link = document.createElement('a');
                link.download = 'sticker-smash.jpeg';
                link.href = dataUrl;
                link.click();
            } catch (e) {
                console.log(e);
            }
        }
    }, []);

    return {
        imageRef,
        saveImage
    }
}