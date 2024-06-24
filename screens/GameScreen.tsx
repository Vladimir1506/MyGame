import React, {useEffect, useRef, useState} from 'react';
import {Alert, FlatList, StyleSheet, useWindowDimensions, View} from 'react-native';
import Title from '../components/ui/Title.tsx';
import NumberContainer from '../components/game/NumberContainer.tsx';
import PrimaryButton from '../components/ui/PrimaryButton.tsx';
import Card from '../components/ui/Card.tsx';
import InstructionText from '../components/ui/InstructionText.tsx';
import GuessLogItem from '../components/game/GuessLogItem.tsx';
import Sound from 'react-native-sound';

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
    const rndNum = Math.floor(Math.random() * (max - min) + min)
    return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum
}



let minBoundary = 1
let maxBoundary = 100
type GameScreenProps = {
    userNumber: number,
    gameOverHandler: (rounds: number) => void
}
const GameScreen = ({userNumber, gameOverHandler}: GameScreenProps) => {
    const initNumber = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState<number>(initNumber)
    const [guessRounds, setGuessRounds] = useState<number[]>([initNumber])
    useEffect(() => {
        if (userNumber == currentGuess) gameOverHandler(guessRounds.length)
    }, [userNumber, currentGuess, gameOverHandler]);

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, []);

    useEffect(() => {
        flatListRef?.current?.scrollToEnd();
    }, [guessRounds]);
    const flatListRef = useRef<FlatList>(null)
    const nextGuessHandler = (dir: string) => {
        if ((dir === 'lower' && currentGuess < userNumber) || (dir === 'higher' && currentGuess > userNumber)) {
            Alert.alert('Не обманывай!', 'Ты ведь знаешь, что это неправильно...', [{text: 'Сорян!', style: 'cancel'}])
            return
        }
        if (dir === 'lower') {
            maxBoundary = currentGuess
        }
        if (dir === 'higher') {
            minBoundary = currentGuess + 1
        }
        const newRandom = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRandom)
        setGuessRounds((prevRounds) => [...prevRounds, newRandom])
    }
    const {width, height} = useWindowDimensions()
    let screen =
        <>
            <View style={styles.numberWrapper}>
                <NumberContainer>{currentGuess}</NumberContainer>
            </View>
            <Card>
                <InstructionText style={styles.instructionText}>Больше или меньше?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton></View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton></View>
                </View>
            </Card>
        </>
    if (width > height) {
        screen =
            <>
                <InstructionText style={styles.instructionText}>Больше или меньше?</InstructionText>
                <View style={styles.wideWrapper}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
                    </View>
                </View>

            </>
    }
    return (
        <View style={styles.screen}>
            <Title>Угадай число</Title>
            {screen}
            <FlatList
                ref={flatListRef}
                scrollsToTop={false}
                keyExtractor={(item) => item.toString()}
                data={guessRounds}
                renderItem={info => <GuessLogItem guess={info.item} roundNumber={info.index + 1}/>}/>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 12,
        flex: 1,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    wideWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    numberWrapper: {
        marginTop: '10%',
    },
    instructionText: {
        marginBottom: 20
    }
});

export default GameScreen;
