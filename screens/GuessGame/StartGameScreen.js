import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Alert, Text } from 'react-native';
import Card from '../../components/GuessGame/UI/Card';
import InstructionText from '../../components/GuessGame/UI/instructionText';
import PrimaryButton from '../../components/GuessGame/UI/PrimaryButton';
import Title from '../../components/GuessGame/UI/Title';
import Colors from '../../constants/colors';

export default function StartGameScreen({ onPickNumber }) {
  const [EnteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(val) {
    setEnteredNumber(val);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(EnteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show Alert
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 to 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          autoCapitalize='none'
          autoCorrect={false}
          value={EnteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainers}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainers: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
