import React, {useState} from 'react';
import {
    Alert,
    Dimensions,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    TextInput,
    useWindowDimensions,
    View
} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton.tsx';
import Colors from '../constants/colors.ts';
import Title from '../components/ui/Title.tsx';
import Card from '../components/ui/Card.tsx';
import InstructionText from '../components/ui/InstructionText.tsx';

type StartGameScreenPropsType = {
    pickNumber: (num: number) => void
}
const StartGameScreen = ({pickNumber}: StartGameScreenPropsType) => {
    const [number, setNumber] = useState<string>('')
    const resetHandler = () => {
        setNumber('')
    }

    const confirmHandler = () => {
        const parsedNum = parseInt(number)
        if (!parsedNum || parsedNum <= 0 || parsedNum > 99) {
            Alert.alert('Некорректное число!', 'Пожалуйста, введите число от 0 до 99',
                [{
                    text: 'Ок',
                    style: 'destructive',
                    onPress: resetHandler
                }])
        } else {
            pickNumber(parsedNum)
        }
    }
    const changeInputTextHandler = (text: string) => {
        setNumber(text)
    }
    const {height: deviceHeight} = useWindowDimensions()
    const marginTop = deviceHeight < 400 ? 10 : 100
    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior={'position'}>
                <View style={[styles.mainContainer, {marginTop}]}>
                    <Title>Угадай моё число</Title>
                    <Card>
                        <InstructionText>Введите число</InstructionText>
                        <TextInput style={styles.numberInput} maxLength={2}
                                   keyboardType={'number-pad'}
                                   autoCapitalize={'none'}
                                   autoCorrect={false}
                                   value={number}
                                   onChangeText={changeInputTextHandler}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetHandler}>Сброс</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmHandler}>Применить</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    mainContainer: {
        alignItems: 'center',
    },

    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    numberInput: {
        borderBottomColor: Colors.white,
        color: Colors.white,
        borderBottomWidth: 3,
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: '900',
        marginVertical: 10,
        textAlign: 'center'
    }
});

export default StartGameScreen;
