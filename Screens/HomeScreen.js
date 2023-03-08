import { useSpotifyAuth } from "../utils";
import SongList from "../components/SongList";
import SongCard from "../components/SongCard";
import SpotifyAuthButton from "../components/authenticated";
import { StyleSheet, StatusBar, SafeAreaView, Text, Image, View } from "react-native";
import { Themes } from "../assets/Themes";
import { Colors } from "../assets/Themes/colors"
import { Images } from "../assets/Themes";
import * as React from 'react';
import logo from "../assets/spotify-logo.png"



export default function HomeScreen() {
    // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
    let contentDisplay = null;
    const renderSongItem = ({})
    if (token) {
        contentDisplay =
            <React.Fragment>
                <View style={styles.header}>
                    <Image style={styles.image} source={logo} />
                    <Text style={styles.title}>My Top Tracks</Text>
                </View>
                <SongList tracks={tracks} />
            </React.Fragment>
    }
    else {
        contentDisplay = (
            <SpotifyAuthButton authenticationFunction={getSpotifyAuth} />
        );

    }
    return (
        <SafeAreaView style={styles.container}>
            {contentDisplay}
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.background,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 15
    },
    image: {
        width: 30,
        height: 30,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    }
});
