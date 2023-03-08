import { FlatList, Text } from "react-native"
import SongCard from "./SongCard";
import { millisToMinutesAndSeconds } from "../utils";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';


const renderSongComponent = ({ item, navigation }) => (
    < SongCard
        title={item.songTitle}
        imageUrl={item.imageUrl}
        duration={item.duration}
        artist={item.songArtists[0].name}
        album={item.albumName}
        preview={item.previewUrl}
        external={item.externalUrl}
    />
);

const SongList = ({ tracks }) => {
    console.log("artist_one", tracks)
    return (
        < FlatList
            data={tracks}
            renderItem={(item) => renderSongComponent(item)}
            keyExtractor={(item) => item.id}
        />
    );
};

export default SongList; 