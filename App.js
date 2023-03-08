import { StyleSheet, SafeAreaView, Text, Pressable } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/authenticated";
import SongList from "./components/SongList";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  let contentDisplay = null;
  const renderSongItem = ({})
  if (token) {
    contentDisplay = <SongList tracks={tracks} />
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
  }
});
