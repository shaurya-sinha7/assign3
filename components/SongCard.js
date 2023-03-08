import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { millisToMinutesAndSeconds } from "../utils";
import { colors } from "../assets/Themes/colors";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import PreviewScreen from "../Screens/PreviewScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import * as React from 'react';


const Stack = createStackNavigator();

export default function SongCard({ title, imageUrl, artist, album, duration, preview, external }) {
    const navigation = useNavigation();
    return (
        <React.Fragment>
            <Pressable
                onPress={() => navigation.navigate('DetailsScreen', { external })}>
                <View style={styles.item}>
                    <Pressable
                        onPress={() => navigation.navigate('PreviewScreen', { preview })}>
                        <AntDesign name="play" size={18} color="green" />
                    </Pressable>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <View style={styles.broad}>
                        <Text numberOfLines={1} style={styles.songName}>{title}</Text>
                        <Text style={styles.artistnames}>{artist}</Text>
                    </View>
                    <Text numberOfLines={1} style={styles.album}>{album}</Text>
                    <Text style={styles.duration}>{millisToMinutesAndSeconds(duration)}</Text>

                </View >
            </Pressable>
        </React.Fragment>
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
        width: 370,
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
    },
    songName: {
        fontSize: 12,
        width: 120,
        color: 'white',
        paddingLeft: 20
    },
    artistnames: {
        fontSize: 12,
        width: 120,
        color: colors.gray,
        paddingLeft: 20
    },
    album: {
        fontSize: 12,
        color: 'white',
        width: 80,
        paddingLeft: 5

    },
    artistName: {
        fontSize: 50,
        color: "white"
    },
    image: {
        width: 75,
        height: 75,
        marginLeft: 15

    },
    duration: {
        fontSize: 12,
        color: "white",
        marginLeft: 10
    }
});