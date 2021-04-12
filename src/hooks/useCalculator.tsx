import { useRef, useState } from "react";


interface IUseCalculator {
    resultado: string;
    resultadoAnterior: string;
    limpiar: () => void;
    armarNumero: (numeroTexto: string) => void;
    delNumero: () => void;
    positicoNegativo: () => void;
    accionOperacion: (operacion: string) => void;
    calcular: () => void;
}

enum operaciones {
    dividir,
    multiplicar,
    restar,
    sumar
}

export const useCalculator = (): IUseCalculator => {
    const [resultado, setResultado] = useState('0');
    const [resultadoAnterior, setResultadoAnterior] = useState('');
    const refOperacion = useRef<operaciones | null>(null)

    const limpiar = () => {
        setResultado('0');
        setResultadoAnterior('');
        refOperacion.current = null;
    };

    const armarNumero = (numeroTexto: string) => {
        if (resultado.includes('.') && numeroTexto === '.')
            return;
        if (resultado === '0') {
            if (numeroTexto === '.') {
                setResultado(resultado + numeroTexto)
            } else if (numeroTexto !== '0')
                setResultado(numeroTexto);
        } else {
            setResultado(resultado + numeroTexto);
        }
    };

    const delNumero = () => {
        if (resultado.replace('-', '').length === 1) {
            setResultado('0')
        } else {
            setResultado(resultado.slice(0, -1))
        }
    };

    const positicoNegativo = () => {
        if (resultado === '0')
            return;
        if (resultado.includes('-')) {
            setResultado(resultado.replace('-', ''));
        } else {
            setResultado('-' + resultado);
        }
    };

    const accionOperacion = (operacion: string) => {
        setResultadoAnterior(resultado.endsWith('.') ? resultado.replace('.', '') : resultado);
        setResultado('0');
        switch (operacion) {
            case '/':
                refOperacion.current = operaciones.dividir;
                break;
            case 'X':
                refOperacion.current = operaciones.multiplicar;
                break;
            case '-':
                refOperacion.current = operaciones.restar;
                break;
            case '+':
                refOperacion.current = operaciones.sumar;
                break;
            default:
                refOperacion.current = null;
                break;
        }
    }

    const calcular = () => {
        const numberOne = Number(resultadoAnterior);
        const numberTwo = Number(resultado);
        switch (refOperacion.current) {
            case operaciones.dividir:
                if (numberTwo !== 0)
                    setResultado((numberOne / numberTwo).toString());
                break;
            case operaciones.multiplicar:
                setResultado((numberOne * numberTwo).toString());
                break;
            case operaciones.restar:
                setResultado((numberOne - numberTwo).toString());
                break;
            case operaciones.sumar:
                setResultado((numberOne + numberTwo).toString());
                break;
            default:
                setResultadoAnterior('');
                setResultado('0')
                break;
        }
        setResultadoAnterior('');
    }

    return {
        resultado,
        resultadoAnterior,
        limpiar,
        armarNumero,
        delNumero,
        positicoNegativo,
        accionOperacion,
        calcular
    }
};