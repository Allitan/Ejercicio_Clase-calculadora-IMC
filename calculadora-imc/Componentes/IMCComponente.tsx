import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IMCResult } from "../Modelos/IMC";

interface Props {
    result: IMCResult;
}

const IMCDisplay: React.FC<Props> = ({result}) => {
    return (
        <View style={styles.container}>
            <Text style= {styles.label}>Tu IMC es:</Text>
            <Text style={styles.imcValue}>{result.imc.toFixed(2)}</Text>
            <Text style={styles.clasification}>Clasificación: {result.clasification}</Text>
        </View>    
    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        alignItems: 'center',
    },

    label: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    imcValue: {
        fontSize: 24,
        color: '#333',
        marginVertical: 10,
    },
    clasification: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,

    }

})

export default IMCDisplay;