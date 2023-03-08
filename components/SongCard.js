import { StyleSheet, Text, View, Image } from "react-native";
import { millisToMinutesAndSeconds } from "../utils";
import { colors } from "../assets/Themes/colors";



export default function SongCard({ title, imageUrl, artist, album, duration }) {
    return (
        <View style={styles.item}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <View style={styles.broad}>
                <Text numberOfLines={1} style={styles.songName}>{title}</Text>
                <Text style={styles.artistnames}>{artist}</Text>
            </View>
            <Text numberOfLines={1} style={styles.album}>{album}</Text>
            <Text style={styles.duration}>{millisToMinutesAndSeconds(duration)}</Text>
        </View >
    )
}


const styles = StyleSheet.create({
    broad: {
        flexDirection: 'column',
        fontSize: 12,
        color: "white"
    },
    item: {
        backgroundColor: "black",
        padding: 16,
        marginVertical: 8,
        flex: 1,
        width: 320,
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
    },
    songName: {
        fontSize: 12,
        width: 120,
        color: 'white',
        paddingLeft: 30
    },
    artistnames: {
        fontSize: 12,
        width: 120,
        color: colors.gray,
        paddingLeft: 30
    },
    album: {
        fontSize: 12,
        color: 'white',
        width: 80,
        paddingLeft: 15

    },
    artistName: {
        fontSize: 50,
        color: "white"
    },
    image: {
        width: 75,
        height: 75,
        marginLeft: -16
    },
    duration: {
        fontSize: 12,
        color: "white",
        marginLeft: 8
    }
});