import React from "react";
import { View } from "react-native";
import MusicPlayer from "./MucsicPlayer";

export default function MusicPlayerScreen() {
    return (
        <View style={{ flex: 1 }}>
            <MusicPlayer />
        </View>
    );
}