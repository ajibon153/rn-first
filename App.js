import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [GoalList, setGoalList] = useState([]);

  function deleteItemHandler(id) {
    console.log('delete', id);
    setGoalList((currentGoal) => {
      console.log(currentGoal.filter((goal) => goal.id !== id));
      return currentGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <GoalInput setGoalList={setGoalList} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={GoalList}
          renderItem={(itemData) => (
            <GoalItem data={itemData.item} onDeleteItem={deleteItemHandler} />
          )}
          keyExtractor={(item, i) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
