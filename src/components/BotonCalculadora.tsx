import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  texto: string;
  color: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

export const BotonCalculadora = ({
  texto,
  color = '#9b9b9b',
  ancho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={[
          styles.boton,
          color === 'grisOscuro'
            ? styles.grisOscuro
            : color === 'naranja'
            ? styles.naranja
            : styles.gris,
          ancho ? styles.ancho : null,
        ]}>
        <Text
          style={[
            styles.botonTexto,
            color === 'gris' ? styles.botonTextoNegro : styles.botonTextoBlanco,
          ]}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    padding: 10,
  },
  gris: {
    backgroundColor: '#9b9b9b',
  },
  naranja: {
    backgroundColor: '#ff9427',
  },
  grisOscuro: {
    backgroundColor: '#2d2d2d',
  },
  botonTextoNegro: {
    color: 'black',
  },
  botonTextoBlanco: {
    color: 'white',
  },
  ancho: {
    width: 180,
  },
});
