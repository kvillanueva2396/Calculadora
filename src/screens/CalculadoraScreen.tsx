import React from 'react';
import {Text, View} from 'react-native';
import {BotonCalculadora} from '../components/BotonCalculadora';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numeroA,
    numeroB,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnRestar,
    btnMultiplicar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroB !== '0' && <Text style={styles.resultadoB}>{numeroB}</Text>}
      <Text style={styles.resultadoA} numberOfLines={1} adjustsFontSizeToFit>
        {numeroA}
      </Text>

      {/* Fila */}
      <View style={styles.fila}>
        <BotonCalculadora texto="C" color="gris" accion={limpiar} />
        <BotonCalculadora texto="+/-" color="gris" accion={positivoNegativo} />
        <BotonCalculadora texto="del" color="gris" accion={btnDelete} />
        <BotonCalculadora texto="/" color="naranja" accion={btnDividir} />
      </View>
      {/* Fila */}
      <View style={styles.fila}>
        <BotonCalculadora texto="7" color="grisOscuro" accion={armarNumero} />
        <BotonCalculadora texto="8" color="grisOscuro" accion={armarNumero} />
        <BotonCalculadora texto="9" color="grisOscuro" accion={armarNumero} />
        <BotonCalculadora texto="X" color="naranja" accion={btnMultiplicar} />
      </View>
      {/* Fila */}
      <View style={styles.fila}>
        <BotonCalculadora texto="4" color="grisOscuro" accion={armarNumero} />
        <BotonCalculadora texto="5" color="grisOscuro" accion={armarNumero} />
        <BotonCalculadora texto="6" color="grisOscuro" accion={armarNumero} />
        <BotonCalculadora texto="-" color="naranja" accion={btnRestar} />
      </View>
      {/* Fila */}
      <View style={styles.fila}>
        <BotonCalculadora texto="1" color="grisOscuro" accion={armarNumero} />
        <BotonCalculadora texto="2" color="grisOscuro" accion={armarNumero} />
        <BotonCalculadora texto="3" color="grisOscuro" accion={armarNumero} />
        <BotonCalculadora texto="+" color="naranja" accion={btnSumar} />
      </View>
      {/* Fila */}
      <View style={styles.fila}>
        <BotonCalculadora
          texto="0"
          color="grisOscuro"
          ancho
          accion={armarNumero}
        />
        <BotonCalculadora texto="." color="grisOscuro" accion={armarNumero} />
        <BotonCalculadora texto="=" color="naranja" accion={calcular} />
      </View>
    </View>
  );
};
