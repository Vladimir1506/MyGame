import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import Colors from '../../constants/colors.ts';

type InstructionTextProps = {
    children: string,
    style?: StyleProp<TextStyle>
}
const InstructionText = ({children, style}: InstructionTextProps) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: '500'
    },
});

export default InstructionText;
