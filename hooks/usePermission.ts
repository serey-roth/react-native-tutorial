import * as MediaLibrary from 'expo-media-library';

export function useAppPermission() {
    const [status, requestPermission] = MediaLibrary.usePermissions();

    if (status === null) {
        return requestPermission();
    }

    return { status }
}
