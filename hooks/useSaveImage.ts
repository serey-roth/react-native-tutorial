import { useCallback, useRef } from "react";
import { View } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";

export function useSaveImage() {
    const imageContainerRef = useRef<View | null>(null);

    const saveImage = useCallback(async () => {
        try {
            const localUri = await captureRef(imageContainerRef, {
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
    }, []);

    return {
        imageContainerRef,
        saveImage
    }
}