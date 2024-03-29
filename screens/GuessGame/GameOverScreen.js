import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import PrimaryButton from '../../components/GuessGame/UI/PrimaryButton';
import Title from '../../components/GuessGame/UI/Title';
import Colors from '../../constants/colors';

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) imageSize = 150;
  if (height < 400) imageSize = 80;

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView syle={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over !</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  imageContainer: {
    height: deviceWidth < 380 ? 200 : 300,
    width: deviceWidth < 380 ? 200 : 300,
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
