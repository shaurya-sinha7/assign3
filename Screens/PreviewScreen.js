import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview';

const PreviewScreen = (preview) => {
    return <WebView source={{ uri: preview.route.params.preview }} />;
}

export default PreviewScreen

const styles = StyleSheet.create({})