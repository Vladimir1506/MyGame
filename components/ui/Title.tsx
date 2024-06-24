import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../../constants/colors.ts';

type TitleProps = {
    children: string
}
const Title = ({children}: TitleProps) => {
    return (
        <Text style={styles.title}> {children} </Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: Colors.black,
        textAlign: 'center',
        borderWidth: 2,
        padding: 12,
        marginTop: 24,
        maxWidth: '80%',
        width: 300
    }
});

export default Title;
