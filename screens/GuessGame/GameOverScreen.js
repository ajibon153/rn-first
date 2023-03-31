import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PrimaryButton from '../../components/GuessGame/UI/PrimaryButton';
import Title from '../../components/GuessGame/UI/Title';
import Colors from '../../constants/colors';

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over !</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/bg/success.png')}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed
          <Text style={styles.highlight}> {roundsNumber} </Text>
          round to guess the number
          <Text style={styles.highlight}> {userNumber} </Text>.
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    marginVertical: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
