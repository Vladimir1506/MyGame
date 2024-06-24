import React, {useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import StartGameScreen from './screens/StartGameScreen.tsx';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen.tsx';
import Colors from './constants/colors.ts';
import GameOverScreen from './screens/GameOverScreen.tsx';
import Sound from 'react-native-sound';

const playSound = () => {
    const ding = new Sound('the_end.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        ding.setVolume(0.1)
        ding.play()
    });
}
const App = () => {
    const [pickedNumber, setPickedNumber] = useState<number>()
    const [roundsNumber, setRoundsNumber] = useState<number>(0)
    const [isGameOver, setIsGameOver] = useState<boolean>(true)
    const pickNumberHandler = (num: number) => {
        setPickedNumber(num)
        setIsGameOver(false)
    }
    const onGameOver = (roundsNumber: number) => {
        setIsGameOver(true)
        setRoundsNumber(roundsNumber)
        playSound()
    }
    const startNewGameHandler = () => {
        setPickedNumber(undefined)
        setRoundsNumber(0)
        setIsGameOver(true)
    }
    let screen = <StartGameScreen pickNumber={pickNumberHandler}/>
    if (pickedNumber) screen = isGameOver ?
        <GameOverScreen pickedNumber={pickedNumber} roundsNumber={roundsNumber} onStartNewGame={startNewGameHandler}/> :
        <GameScreen userNumber={pickedNumber} gameOverHandler={onGameOver}/>

    return (
        <LinearGradient
            // colors={['#4e0329', '#ddb52f']}
            colors={[Colors.white, Colors.black]}
            style={styles.rootScreen}>
            <ImageBackground source={require('./assets/images/dices.jpg')}
                             resizeMode={'cover'}
                             style={styles.rootScreen}
                             imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.rootScreen}>
                    {screen}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.2
    }
});

export default App;
