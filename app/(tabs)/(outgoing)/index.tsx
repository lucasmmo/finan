import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import { Dimensions } from "react-native";
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import Svg, { Path } from 'react-native-svg';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full width

export default function OutgoingScreen() {
    const [selectedOption, setSelectedOption] = useState('Fixo');
    return (
        <>
            <View style={{
                height: 150,
                width: width,
                backgroundColor: '#4DB97F',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                paddingHorizontal: 77,
                paddingTop: 10,
            }}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={{ color: '#FFFF', fontSize: 23 }}>Despesa</Text>
                    <Text style={{ color: '#FFFF', fontSize: 23 }}>Receita</Text>
                </View>
                <Text style={{ color: '#FFFF', fontSize: 40, marginLeft: 150, marginTop: 10 }}>7.000,00</Text>
            </View>


            <View style={{
                paddingTop: 33,
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: '#FFFF',
                height: '100%'
            }}>
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

            </View>

        </>
    )
};

type GreetingsInput = {
    gender: String
    name: String
};

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        marginBottom: 8,
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingLeft: 10,
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
        marginLeft: 5,
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
});