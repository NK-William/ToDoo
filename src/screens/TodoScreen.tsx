import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';
import { Entypo } from '@expo/vector-icons';

const TodoScreen = () => {
  const [doto, setDoto] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d732',
      title: 'Fourth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29543',
      title: 'Fiveth Item',
    }
  ]);

  const renderItem = ({ item }: { item: { title: string, id: string } }) => (
    <TodoItem item={item} onPress={setDoto} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>ToDoo</Text>
      <Text style={styles.todotitle}>2 Tasks</Text>
      <View style={styles.itemsContainer}>
        <FlatList
          data={doto}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{ flex: 1 }}
        />
        <TouchableOpacity style={styles.addButton}>
          <Entypo name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: "#5CC2FF",
    paddingHorizontal: 16,
    paddingTop: 25
  }, appTitle:
    { marginHorizontal: 40, fontWeight: 'bold', color: 'white', fontSize: 35 },
  todotitle:
    { marginHorizontal: 40, color: 'white', fontSize: 18, marginBottom: 24 },
  itemsContainer: { flex: 1, backgroundColor: "white", borderRadius: 40, paddingVertical: 30, paddingHorizontal: 15 },
  addButton: {
    height: 70,
    width: 70,
    backgroundColor: "#5CC2FF",
    alignSelf: "flex-end",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
