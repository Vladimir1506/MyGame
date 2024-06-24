import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import Title from '../components/ui/Title.tsx';
import Colors from '../constants/colors.ts';
import PrimaryButton from '../components/ui/PrimaryButton.tsx';

type GameOverScreenProps = {
    pickedNumber: number,
    roundsNumber: number,
    onStartNewGame: () => void
}
const text1 = 'Вашему телефону понадобилось\n'
const text2 = ' попыток,\nчтобы угадать \nчисло '

const GameOverScreen = ({pickedNumber, roundsNumber, onStartNewGame}: GameOverScreenProps) => {


    const {width, height} = useWindowDimensions()

    const imageStyle = {
        width: width < 380 ? 300 : 250,
        height: width < 380 ? 300 : 250,
        borderRadius: width < 380 ? 150 : 125,
    }
    let screen =

        <View style={styles.mainContainer}>
            <Title>Конец игры</Title>
            <View style={styles.imageContainer}>
                <Image style={[styles.image, imageStyle]} source={require('../assets/images/vse.jpg')}></Image>
            </View>
            <Text style={styles.summaryText}>
                {text1}
                <Text style={styles.boldText}>{roundsNumber}</Text>
                {text2}
                <Text style={styles.boldText}>{pickedNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Начать заново</PrimaryButton>
        </View>
    if (width > height) {
        screen = <ScrollView style={{flex: 1}}>
            <View style={styles.wideContainer}>
                <View style={styles.leftContainer}>
                    <Title>Конец игры</Title>
                    <Text style={styles.summaryText}>
                        {text1}
                        <Text style={styles.boldText}>{roundsNumber}</Text>
                        {text2}
                        <Text style={styles.boldText}>{pickedNumber}</Text>
                    </Text>
                    <PrimaryButton onPress={onStartNewGame}>Начать заново</PrimaryButton>
                </View>
                <View style={styles.imageContainer}>
                    <Image style={[styles.image, imageStyle]} source={require('../assets/images/vse.jpg')}></Image>
                </View>
            </View>
        </ScrollView>
    }
    return screen
};
const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    wideContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    leftContainer: {
        alignItems: 'center'
    },
    imageContainer: {
        overflow: 'hidden',
        marginTop: '10%',
        alignItems: 'center',
        opacity: 0.7,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 24,
        color: Colors.white,
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center',
        marginVertical: '10%'
    },
    boldText: {
        fontFamily: 'OpenSans-Bold',
        color: 'yellow',
        fontSize: 32,
    }
});

export default GameOverScreen;
