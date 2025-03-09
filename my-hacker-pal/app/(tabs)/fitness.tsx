import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const FitnessForm: React.FC = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [goal, setGoal] = useState('Lose Weight'); // Default goal
    const [size, setSize] = useState('');

    const handleSubmit = () => {
        console.log('Form submitted:', { name, age, goal, size });
        alert(`Form submitted!\nName: ${name}\nAge: ${age}\nGoal: ${goal}\nSize: ${size}`);
    };

    const styles = StyleSheet.create({
        container: {
            padding: 20,
        },
        form_style: { 
            borderWidth: 1, 
            marginBottom: 15, 
            padding: 10,
            borderRadius: 5,
        },
        title: {
            fontSize: 24, 
            marginBottom: 20, 
            textAlign: 'center',
            fontWeight: 'bold',
        },
        button_submit: {
            marginTop: 20,
            backgroundColor: 'blue',
        },
        picker: {
            borderWidth: 1,
            borderColor: 'black',
            marginBottom: 15,
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fitness Form</Text>

            <TextInput
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                style={styles.form_style}
            />
            <TextInput
                placeholder="Age"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
                style={styles.form_style}
            />
                        <TextInput
                placeholder="Height (cm)"
                value={size}
                onChangeText={setSize}
                keyboardType="numeric"
                style={styles.form_style}
            />

            <TextInput
                placeholder="Weight (kg)"
                value={size}
                onChangeText={setSize}
                keyboardType="numeric"
                style={styles.form_style}
            />

            <Text style={{ marginBottom: 5 }}>Select Your Fitness Goal:</Text>
            <Picker
                selectedValue={goal}
                onValueChange={(itemValue) => setGoal(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Lose Weight" value="Lose Weight" />
                <Picker.Item label="Gain Muscle" value="Gain Muscle" />
                <Picker.Item label="Mantain Weight" value="Mantain Weight" />
            </Picker>

            <TextInput
                placeholder="Daily calorie goal (kcal)"
                value={size}
                onChangeText={setSize}
                keyboardType="numeric"
                style={styles.form_style}
            />

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default FitnessForm;
