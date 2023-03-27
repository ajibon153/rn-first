import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NumberContainer from '../../components/GuessGame/Game/NumberContainer';
import Title from '../../components/GuessGame/UI/Title';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (min - max)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [CurrentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      {/* <NumberContainer /> */}
      <View>
        <Text>Higher or Lower ?</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    marginTop: 20,
  },
});
