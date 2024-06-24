import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../constants/colors.ts';

type GuessLogItemProps = {
    roundNumber: number,
    guess: number
}
const GuessLogItem = ({roundNumber, guess}: GuessLogItemProps) => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Число: {guess}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        width: '100%',
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 40,
        padding: 7,
        justifyContent: 'space-around',
        marginVertical: 4,
        opacity: 0.7,
        flexGrow: 1,
        elevation: 10,
        shadowColor: Colors.black,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2
    },
    itemText: {
        color: Colors.white,
        fontSize: 16
    }
});

export default GuessLogItem;
