import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteItem.bind(this, props.data.id)}
      >
        <Text style={styles.goalText}>{props.data.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});
