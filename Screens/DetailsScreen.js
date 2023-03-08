import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';


const DetailsScreen = (external) => {
    return <WebView source={{ uri: external.route.params.external }} />;

}

export default DetailsScreen

const styles = StyleSheet.create({})