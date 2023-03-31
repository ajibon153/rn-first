import React, { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from '../screens/GuessGame/StartGameScreen';
import GameScreen from '../screens/GuessGame/GameScreen';
import Colors from '../constants/colors';
import GameOverScreen from '../screens/GuessGame/GameOverScreen';
import { StatusBar } from 'expo-status-bar';

export const GuessGame = () => {
  const [UserNumber, setUserNumber] = useState();
  const [GuessNumber, setGuessNumber] = useState(0);
  const [GameIsOver, setGameIsOver] = useState(false);

  const [fontsLoaded] = useFonts({
    'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) return <AppLoading />;

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function restartNumberHandler() {
    setUserNumber(null);
    setGuessNumber(0);
  }

  function GameOverHandler(round) {
    setGuessNumber(round);
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (UserNumber) {
    screen = (
      <GameScreen
        UserNumber={UserNumber}
        restartNumber={restartNumberHandler}
        GameOverHandler={GameOverHandler}
      />
    );
  }

  if (GameIsOver && UserNumber > 0) {
    screen = (
      <GameOverScreen
        roundsNumber={GuessNumber}
        userNumber={UserNumber}
        onStartNewGame={restartNumberHandler}
      />
    );
  }

  return (
    <>
      <StatusBar />
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
    </>
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
