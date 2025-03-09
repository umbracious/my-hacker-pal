import { Text, View, StyleSheet, Image} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

export default function Index() {


    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Text style={styles.title}>Welcome to My Hacker Pal!</Text>
        <Text style={styles.subheader}>Need inspiration to help meet your health goals? Choose an option to begin:</Text>
        <View style={styles.buttonsContainer}>
            <Link href="/fitness">
            <Image
                style={styles.image}
                source={require("@/assets/images/barbell.png")}
            />
            </Link>
            <Link href="/diet">
            <Image
                style={styles.image}
                source={require("@/assets/images/cutlery.png")}
            />
            </Link>
        </View>
        
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Light gray background
    },
    title: {
        fontSize: 30, // Larger font size
        fontWeight: '700', // Bold
        color: '#333', // Dark gray text
        top: 40,
        position: 'absolute',
        padding: 50,
        textAlign: 'center',
      },
    subheader: {
        textAlign: 'center', // Center text
        fontSize: 18, // Slightly smaller than title
        fontWeight: '600', // Semi-bold
        color: '#666', // Lighter gray for subheader
    },
    buttonsContainer: {
        flexDirection: 'row', // Arrange buttons in a row
        justifyContent: 'center', // Center the buttons
        marginTop: 16, // Add space above the buttons
    },
    image: {
        padding: 10, // Add padding around image // Add margin around image
        width: 50, // Set width of image
        height: 50, // Set height of image
        borderStyle:  'solid',
        borderWidth: 1,
    },
  });