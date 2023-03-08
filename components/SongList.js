import { FlatList, Text } from "react-native"
import SongCard from "./SongCard";
import { millisToMinutesAndSeconds } from "../utils";

const renderSongComponent = ({ item }) => (
    <SongCard
        title={item.songTitle}
        imageUrl={item.imageUrl}
        duration={item.duration}
        artist={item.songArtists[0].name}
        album={item.albumName}
    />
);

const SongList = ({ tracks }) => {
    console.log("artist_one", tracks[0])
    return (
        < FlatList
            data={tracks}
            renderItem={(item) => renderSongComponent(item)}
            keyExtractor={(item) => item.id}
        />
    );
};

export default SongList; 