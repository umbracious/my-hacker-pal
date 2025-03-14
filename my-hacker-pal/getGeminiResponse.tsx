import React, {useState, useRef} from 'react';

// Insert API Key for local testing, will add a way to securely retrieve this from a DB later
// const API_KEY = 'INSERT API KEY HERE';

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel( {model: "gemini-1.5-flash"} );


export const getGeminiResponse = async (prompt: string) => {
    try {
    // initialisation du model
    const prompt_structure = "Créer une diète structurée d'une journée pour une personne de 40 ans, 60kgs, sans problème cardiaque ni d'alimentation et ";
    // assignation des valeurs stockés dans json vers le prompt pour generer la diète
    const fullPrompt = `${prompt_structure}${prompt}`;
    const result = await model.generateContent(fullPrompt);
    console.log(result.response.text());

    return result.response.text();

    } catch (error) {
        console.error("Error dans Gemini: ", error)
        return "Error à obtenir la réponse";
    }
};
