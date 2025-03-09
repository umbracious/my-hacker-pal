import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const Diet: React.FC = () => {
    const [protein, setProtein] = useState('');
    const [fat, setFat] = useState('');
    const [carbs, setCarbs] = useState('');
    const [calories, setCalories] = useState('');
    const [goal, setGoal] = useState('plan for the day ?'); // Objectif par défaut

    const handleSubmit = () => {
        console.log('Form submitted:', { protein, fat, carbs, calories, goal });
        alert(`Form submitted!\nProtein: ${protein}g\nFat: ${fat}g\nCarbs: ${carbs}g\nCalories: ${calories} kcal\nGoal: ${goal}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Diet Form</Text>

            {/* Objectif calorique */}
            <Text style={styles.label}>Daily calorie goal (kcal)</Text>
            <TextInput
                value={calories}
                onChangeText={setCalories}
                keyboardType="numeric"
                style={styles.input}
            />

            {/* Macronutriments */}
            <Text style={styles.label}>Macronutrients (g)</Text>
            <TextInput
                placeholder="Protein (g)"
                value={protein}
                onChangeText={setProtein}
                keyboardType="numeric"
                style={styles.input}
            />
            <TextInput
                placeholder="Fat (g)"
                value={fat}
                onChangeText={setFat}
                keyboardType="numeric"
                style={styles.input}
            />
            <TextInput
                placeholder="Carbs (g)"
                value={carbs}
                onChangeText={setCarbs}
                keyboardType="numeric"
                style={styles.input}
            />

            {/* Objectif fitness */}
            <Text style={styles.label}>How long are you willing to grind ?</Text>
            <Picker
                selectedValue={goal}
                onValueChange={(itemValue) => setGoal(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Plan for the day ?" value="plan for the day ?" />
                <Picker.Item label="Plan for the week ?" value="Plan for the week ?" />
                <Picker.Item label="Plan for the month ?" value="Plan for the month ?" />
            </Picker>

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 5,
    },
    picker: {
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
    },
});

export default Diet;
