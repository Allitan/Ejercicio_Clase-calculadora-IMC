import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{ useState, useEffect } from 'react';
import IMCDisplay from './Componentes/IMCComponente';
import { IMCResult } from './Modelos/IMC';


export default function App() {
  const [peso, setPeso] = useState<number>(70);
  const [altura, setAltura] = useState<number>(1.75);
  const [resultado, setResultado] = useState<IMCResult>({imc: 0, clasification: ''});

  useEffect(() => {
    if (peso > 0 && altura > 0) {
      const newImc = peso / (altura * altura);
      let newClasificacion: string;

      if (newImc < 18.5) {
        newClasificacion = 'Bajo peso'
      } else if (newImc >= 18.5 && newImc < 24.9) {
        newClasificacion = 'Peso normal';
      } else if (newImc >= 25 && newImc < 29.9) {
        newClasificacion = 'Sobrepeso';
      } else {
        newClasificacion = 'Obesidad';
      }

      setResultado({ imc: newImc, clasification: newClasificacion });
    } else {
      setResultado({ imc: 0, clasification: '' });
    }
    
  }, [peso, altura]);


  const handleAumentarPeso = () => {
    setPeso(peso + 1);
  };

  const handleDisminuirPeso = () => {
    setPeso(peso - 1);
  };

  const handleAumentarAltura = () => {
    setAltura(altura + 0.01);
  };

  const handleDisminuirAltura = () => {
    setAltura(altura - 0.01);
  };

  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>

      <View style={styles.controlContainer}>
        <Text style={styles.label}>Peso en kg: {peso}</Text>
        <View style={styles.buttonTop}>
          <Button title='+1' onPress={handleAumentarPeso} />
        </View>
        <View style={styles.button} >
          <Button title='-1' onPress={handleDisminuirPeso} />
        </View>
      </View>

      <View style={styles.controlContainer}>
        <Text style={styles.label}>Altura en metros: {altura.toFixed(2)}</Text>
        <View style={styles.buttonTop}>
          <Button title='+1' onPress={handleAumentarAltura} />
        </View>  
        <View style={styles.button}>
          <Button title='-1' onPress={handleDisminuirAltura} />
        </View>
        
      </View>

      <IMCDisplay result={resultado} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  controlContainer: {
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },

  label: {
    fontSize: 20,
    marginBottom: 20,
  },

  buttonTop:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',
  },

  button:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 10,
  }
});
