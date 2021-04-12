import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';



export const CalculadoraScreen = () => {

    const { resultado, resultadoAnterior, limpiar, positicoNegativo, delNumero, accionOperacion, armarNumero, calcular } = useCalculator();

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.lastResultado}>{resultadoAnterior}</Text>
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{resultado}</Text>

            <View style={styles.fila}>
                <BotonCalc texto='C' onPress={limpiar} />
                <BotonCalc texto='+/-' onPress={positicoNegativo} />
                <BotonCalc texto='del' onPress={delNumero} />
                <BotonCalc texto='/' color='orange' onPress={accionOperacion} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='7' color='black' onPress={armarNumero} />
                <BotonCalc texto='8' color='black' onPress={armarNumero} />
                <BotonCalc texto='9' color='black' onPress={armarNumero} />
                <BotonCalc texto='X' color='orange' onPress={accionOperacion} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='4' color='black' onPress={armarNumero} />
                <BotonCalc texto='5' color='black' onPress={armarNumero} />
                <BotonCalc texto='6' color='black' onPress={armarNumero} />
                <BotonCalc texto='-' color='orange' onPress={accionOperacion} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='1' color='black' onPress={armarNumero} />
                <BotonCalc texto='2' color='black' onPress={armarNumero} />
                <BotonCalc texto='3' color='black' onPress={armarNumero} />
                <BotonCalc texto='+' color='orange' onPress={accionOperacion} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='0' color='black' ancho onPress={armarNumero} />
                <BotonCalc texto='.' color='black' onPress={armarNumero} />
                <BotonCalc texto='=' color='orange' onPress={calcular} />
            </View>
        </View>
    )
}
