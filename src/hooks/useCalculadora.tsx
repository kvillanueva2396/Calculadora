import {useRef, useState} from 'react';

enum Operadores {
  suma,
  resta,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numeroA, setNumeroA] = useState('0');
  const [numeroB, setNumeroB] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumeroA('0');
    setNumeroB('0');
  };

  const armarNumero = (numeroTexto: string) => {
    //No aceptar doble punto
    if (numeroA.includes('.') && numeroTexto === '.') return;

    if (numeroA.startsWith('0') || numeroA.startsWith('-0')) {
      //Punto decimal
      if (numeroTexto === '.') {
        setNumeroA(numeroA + numeroTexto);

        //Evaluar si es otro cero, y hay un punto
      } else if (numeroTexto === '0' && numeroA.includes('.')) {
        setNumeroA(numeroA + numeroTexto);

        //Evaluar si es diferente de cero, y no tiene un punto
      } else if (numeroTexto !== '0' && !numeroA.includes('.')) {
        setNumeroA(numeroTexto);

        //Evitar 000.0
      } else if (numeroTexto === '0' && !numeroA.includes('.')) {
        setNumeroA(numeroA);
      } else {
        setNumeroA(numeroA + numeroTexto);
      }
    } else {
      setNumeroA(numeroA + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numeroA.includes('-')) {
      setNumeroA(numeroA.replace('-', ''));
    } else {
      setNumeroA('-' + numeroA);
    }
  };

  const btnDelete = () => {
    setNumeroA(numeroA.substring(0, numeroA.length - 1));
    if (numeroA.length === 1 || (numeroA.length === 2 && numeroA.includes('-')))
      setNumeroA('0');
  };

  const cambiarNumPorAnterior = () => {
    if (numeroA.endsWith('.')) {
      setNumeroB(numeroA.slice(0, -1));
    } else {
      setNumeroB(numeroA);
    }
    setNumeroA('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.resta;
  };

  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.suma;
  };

  const calcular = () => {
    const num1 = Number(numeroA);
    const num2 = Number(numeroB);

    switch (ultimaOperacion.current) {
      case Operadores.suma:
        setNumeroA(`${num1 + num2}`);
        break;

      case Operadores.resta:
        setNumeroA(`${num2 - num1}`);
        break;

      case Operadores.multiplicar:
        setNumeroA(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumeroA(`${num2 / num1}`);
        break;
      default:
        break;
    }

    setNumeroB('0');
  };

  return {
    numeroA,
    numeroB,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    armarNumero,
    calcular,
  };
};
