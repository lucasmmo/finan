import { SafeAreaView , View, StyleSheet, TouchableOpacity, Text, TextInput, Animated } from 'react-native';
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState, useEffect } from 'react';
import React from 'react';

var width = Dimensions.get('window').width;

export default function OutgoingScreen() {

    const [selectedOption, setSelectedOption] = useState('Fixo');
    const [selectedType, setSelectedType] = useState('Despesa');

    const backgroundColor = new Animated.Value(0);

    const animateColor = () => {
        Animated.timing(backgroundColor, {
            toValue: selectedType === 'Despesa' ? 0 : 1,
            duration: 500,
            useNativeDriver: false, 
          }).start();
    };

    useEffect(() => {
        animateColor();
    }, [selectedType]);

    const backgroundColorInterpolated = backgroundColor.interpolate({
        inputRange: [0, 1],
        outputRange: ['#4DB97F', '#FF4B4B'],
    });

    return (
        <SafeAreaView style={{ flex: 1}}>
            <Animated.View 
                style={[styles.header, { backgroundColor: backgroundColorInterpolated }]}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <TouchableOpacity 
                        onPress={() => setSelectedType('Despesa')}
                        style={[styles.headerButton, selectedType === 'Despesa' && 
                        styles.selectedHeaderButton]}>
                        <Text style={styles.headerText}>Despesa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => setSelectedType('Receita')}
                        style={[styles.headerButton, selectedType === 'Receita' && 
                        styles.selectedHeaderButton]}>
                        <Text style={styles.headerText}>Receita</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.amount}>7.000,00</Text>
            </Animated.View>

            <SafeAreaView style={styles.formContainer}>
                {selectedType === 'Despesa' && (
                    <RenderFormFields />
                )}

                {selectedType === 'Receita' && (
                    <RenderFormFields />
                )}

                <View style={styles.line} />
            </SafeAreaView>
        </SafeAreaView>
    );

    function RenderFormFields() {
        console.log("RenderFormFields foi chamado!");
        return (
            <>
                <Text style={styles.label}>Descrição</Text>
                <View style={styles.inputContainer}>
                    <Icon name="edit" size={20} color="#4DB97F" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione a descrição"
                        keyboardType="default"
                        placeholderTextColor="#B7B7B7"
                    />
                </View>

                <Text style={[styles.label, { marginTop: 30 }]}>Categoria</Text>
                <View style={styles.inputContainer}>
                    <Icon name="list" size={20} color="#4DB97F" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Outros"
                        keyboardType="default"
                        placeholderTextColor="#000000"
                    />
                </View>

                <Text style={[styles.label, { marginTop: 30 }]}>Recebi em</Text>
                <View style={styles.inputContainer}>
                    <Icon name="bank" size={20} color="#4DB97F" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Conta X"
                        keyboardType="default"
                        placeholderTextColor="#000000"
                    />
                </View>

                <Text style={[styles.label, { marginTop: 30 }]}>Data</Text>
                <View style={styles.inputContainer}>
                    <Icon name="calendar" size={20} color="#4DB97F" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="dd/MM/yyyy"
                        keyboardType="default"
                        placeholderTextColor="#000000"
                    />
                </View>

                <Text style={[styles.label, { marginTop: 30 }]}>Repetir lançamento</Text>
                <View style={styles.optionContainer}>
                    <TouchableOpacity
                        style={[styles.optionButton, selectedOption === 'Fixo' && styles.selectedOption]}
                        onPress={() => setSelectedOption('Fixo')}
                    >
                        <Text style={styles.optionText}>Fixo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.optionButton, selectedOption === 'Parcelado' && styles.selectedOption]}
                        onPress={() => setSelectedOption('Parcelado')}
                    >
                        <Text style={styles.optionText}>Parcelado</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }
};

const styles = StyleSheet.create({
    header: {
        height: 150,
        width: width,
        backgroundColor: "#4DB97F",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: 77,
        paddingTop: 10
    },
    headerText: {
        color: '#FFFF',
        fontSize: 23
    },
    amount: {
        color: '#FFFF',
        fontSize: 40,
        marginTop: 10,
        marginLeft: 165,
    },
    formContainer: {
        paddingTop: 33,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#FFFF',
        height: '100%',
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
        marginLeft: 30, 
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30, 
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingLeft: 10,
        width: '90%'
    },
    icon: {
        marginRight: 10,
    },
    input: {
        height: 40,
        flex: 1,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    optionButton: {
        width: 120,
        padding: 9,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        marginLeft: 30, 
    },
    optionContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    selectedOption: {
        backgroundColor: '#4DB97F',
        borderColor: '#4DB97F',
    },
    optionText: {
        fontSize: 15,
        color: '#333',
    },
    line: {
        width: '90%',
        height: 1,
        backgroundColor: '#ccc',
        marginTop: 8,
        marginLeft: 30, 
    },
    headerButton: {
        paddingBottom: 5,
        
    },
    selectedHeaderButton: {
        borderBottomWidth: 2,
        borderBottomColor: '#FFFF',
    },
});