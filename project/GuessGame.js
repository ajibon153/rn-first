import React, { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from '../screens/GuessGame/StartGameScreen';
import GameScreen from '../screens/GuessGame/GameScreen';
import Colors from '../constants/colors';
import GameOverScreen from '../screens/GuessGame/GameOverScreen';

export const GuessGame = () => {
  const [UserNumber, setUserNumber] = useState(0);
  const [GameIsOver, setGameIsOver] = useState(false);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function restartNumberHandler() {
    setUserNumber();
  }

  function GameOverHandler() {
    console.log('GameOverHandler');
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (UserNumber > 0) {
    screen = (
      <GameScreen
        UserNumber={UserNumber}
        restartNumber={restartNumberHandler}
        GameOverHandler={GameOverHandler}
      />
    );
  }

  if (GameIsOver && UserNumber > 0) {
    screen = <GameOverScreen />;
    return;
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('../assets/bg/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
