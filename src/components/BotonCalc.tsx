import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface BotonCalcProps {
    texto: string,
    color?: 'gray' | 'black' | 'orange',
    ancho?: boolean,
    onPress: (numeroTexto: string) => void
}

export const BotonCalc = ({ texto, color = 'gray', ancho = false, onPress }: BotonCalcProps) => {
    return (
        <TouchableOpacity onPress={() => onPress(texto)} >
            <View style={[styles.boton, color === 'orange' ? styles.btnOrange : color === 'black' ? styles.btnBlack : {}, { width: ancho ? 180 : 80 }]}>
                <Text style={{ ...styles.botonTexto, color: color === 'gray' ? 'black' : 'white' }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}
