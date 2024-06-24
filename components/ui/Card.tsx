import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../constants/colors.ts';

type CardProps = {
    children: ReactNode
}
const Card = ({children}: CardProps) => {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'rgb(98,96,94)',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 10,
        alignItems: 'center',

        // iOS shadow
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});

export default Card;
