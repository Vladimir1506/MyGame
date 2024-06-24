import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/colors.ts';

type PrimaryButtonPropsType = {
    children: string,
    onPress: () => void
}
const PrimaryButton = ({children, onPress}: PrimaryButtonPropsType) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                android_ripple={{color: Colors.black}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>

    );
};

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 30,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#faefda',

        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        fontSize: 20,
        color: Colors.black,
        textAlign: 'center',
        fontWeight: '900'
    },
    pressed: {
        opacity: 0.75
    }
});

export default PrimaryButton;
