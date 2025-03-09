import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { GoogleGenerativeAI } from "@google/generative-ai"
import { getGeminiResponse } from "@/app/getGemini";

export default function GeminiDietPlan() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleGenerateResponse = async() => {
        if (!prompt.trim()) return ;


        setResponse("Loading...");
        const result = await getGeminiResponse(prompt);
        setResponse(result);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Écrire prompt</Text>
            <TextInput
                style = {styles.input}
                value={prompt}
                onChangeText={setPrompt}
            />
            <TouchableOpacity style={styles.button} onPress={handleGenerateResponse}>
                <Text style={styles.buttonText}>Génerer réponse</Text>
            </TouchableOpacity>
            {response ? <Text style={styles.response}>{response}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: "center"},
    input: {borderWidth: 1, padding: 10 },
    button: {backgroundColor: "#007bff", alignItems: "center"},
    buttonText: {fontWeight: "bold"},
    response: {marginTop: 20, fontSize: 16, textAlign: "center"},
    title: {}
})