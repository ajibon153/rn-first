import { useState } from 'react';
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Pressable,
  Modal,
  Image,
} from 'react-native';
import GoalImage from '../assets/goal.png';

function GoalInput(props) {
  const [EnteredText, setEnteredText] = useState('');

  function addGoalHandler() {
    props.setGoalList((prevGoalList) => [
      ...prevGoalList,
      { text: EnteredText, id: Math.random().toString() },
    ]);
    setEnteredText('');
    props.modalPopHandler();
  }

  function goalInputHandler(text) {
    setEnteredText(text);
  }

  return (
    <Modal visible={props.ModalShow} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={GoalImage} style={styles.image} />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder='Your goal...'
          value={EnteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='add goal' onPress={addGoalHandler} color='#5e0acc' />
          </View>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={props.modalPopHandler}
              color='#f31282'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 20,
    backgroundColor: '#1e085a',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '80%',
    padding: 16,
  },
  goalsContainer: {
    flex: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  button: {
    width: 100,
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
