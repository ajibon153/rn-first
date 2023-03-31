import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import NumberContainer from '../../components/GuessGame/Game/NumberContainer';
import Card from '../../components/GuessGame/UI/Card';
import InstructionText from '../../components/GuessGame/UI/instructionText';
import PrimaryButton from '../../components/GuessGame/UI/PrimaryButton';
import Title from '../../components/GuessGame/UI/Title';
import { Ionicons } from '@expo/vector-icons';
import GuessLog from '../../components/GuessGame/Game/GuessLog';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  UserNumber,
  restartNumber,
  GameOverHandler,
}) {
  const initialGuess = generateRandomBetween(1, 100, UserNumber);
  const [CurrentGuess, setCurrentGuess] = useState(initialGuess);
  const [GuessRounds, setGuessRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (CurrentGuess === UserNumber) GameOverHandler(GuessRounds.length);
  }, [CurrentGuess, UserNumber, GameOverHandler]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === '-' && CurrentGuess < UserNumber) ||
      (direction === '+' && CurrentGuess > UserNumber)
    ) {
      Alert.alert("Don't lie !", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'Cancel' },
      ]);
      return;
    }

    if (direction === '-') maxBoundary = CurrentGuess;
    else minBoundary = CurrentGuess + 1;

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      CurrentGuess
    );

    setCurrentGuess(newRndNumber);
    setGuessRounds((prev) => [newRndNumber, ...prev]);
  }

  const guessRoundListLength = GuessRounds.length;

  let content = (
    <>
      <NumberContainer>{CurrentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonContainers}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, '+')}>
              <Ionicons name='md-add' size={24} color='white' />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, '-')}>
              <Ionicons name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500)
    content = (
      <>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonContainersWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, '+')}>
              <Ionicons name='md-add' size={24} color='white' />
            </PrimaryButton>
          </View>
          <NumberContainer>{CurrentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, '-')}>
              <Ionicons name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </>
    );

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {GuessRounds.map((guess) => (
          <Text key={guess}>{guess}</Text>
        ))} */}
        <FlatList
          data={GuessRounds}
          renderItem={(itemData) => (
            <GuessLog
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
      {/* <View style={styles.buttonContainer}>
      
        <PrimaryButton onPress={restartNumber}>Back</PrimaryButton>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    marginTop: 30,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonContainers: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainersWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    height: 400,
    padding: 16,
    marginTop: 10,
  },
});
