import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors.ts';

type NumberContainerProps = {
    children: number
}
const NumberContainer = ({children}: NumberContainerProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 7,
        borderColor: Colors.white,
        borderRadius: 10,
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.white,
        fontSize: 77,
        fontWeight: '900'
    }
});

export default NumberContainer;
