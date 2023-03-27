import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Button, StatusBar } from 'react-native';
import GoalInput from '../components/ToDoList/GoalInput';
import GoalItem from '../components/ToDoList/GoalItem';

export default function App() {
  const [GoalList, setGoalList] = useState([]);
  const [ModalShow, setModalShow] = useState(false);

  function modalPopHandler() {
    setModalShow(!ModalShow);
  }

  function deleteItemHandler(id) {
    setGoalList((currentGoal) => currentGoal.filter((goal) => goal.id !== id));
  }

  return (
    <>
      {/* <StatusBar style='light' /> */}
      <View style={styles.container}>
        <Button
          title='Add New Goal'
          onPress={modalPopHandler}
          color='#5e0acc'
        />
        {/* {ModalShow && ( */}
        <GoalInput
          setGoalList={setGoalList}
          ModalShow={ModalShow}
          modalPopHandler={modalPopHandler}
        />
        {/* )} */}
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
});
