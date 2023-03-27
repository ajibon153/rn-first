import React, { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from '../screens/GuessGame/StartGameScreen';
import GameScreen from '../screens/GuessGame/GameScreen';
import Colors from '../constants/colors';

export const GuessGame = () => {
  const [UserNumber, setUserNumber] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function restartNumberHandler() {
    setUserNumber();
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (UserNumber > 0) {
    screen = (
      <GameScreen
        UserNumber={UserNumber}
        restartNumber={restartNumberHandler}
      />
    );
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
