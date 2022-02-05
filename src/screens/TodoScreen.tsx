import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';
import { Entypo } from '@expo/vector-icons';

const primaryColor = "#5CC2FF";

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
  const [showEditor, setShowEditor] = useState({ showAdd: true, showEdit: false });
  const editMode = showEditor || setShowEditor;

  const addItem = () => {
    const id = new Date().getTime().toString();
    console.log(id);
    setDoto([...doto, { id: id, title: "Added item" }]);
  }

  const deleteItem = (id: string) => {
    let newItems = doto.filter(item => item.id != id);
    setDoto(newItems);
  }

  const updateItem = (id: string) => {
    // let newItems = doto.filter(item => item.id != id);
    let newItems = doto;
    const items = doto.filter(item => item.id == id);
    const index = newItems.indexOf(items[0]);
    newItems[index] = { id, title: "Test edit" }
    console.log(id);
    console.log(newItems);
    setDoto([...newItems]);
  }

  const renderItem = ({ item }: { item: { title: string, id: string } }) => (
    <TodoItem
      item={item}
      onDeletePressed={deleteItem}
      onEditPressed={updateItem} />
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
        /><View style={styles.EditorContainer}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.EditorTitle}>
              Hey there
            </Text>
            <View style={{ height: 1, backgroundColor: primaryColor, width: 50, marginTop: 2 }}></View>
          </View>
          <TextInput style={styles.textInput} />
          <TouchableOpacity>
            <View style={styles.submitButton}>
              <Text style={{ color: "white" }}>SAVE</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
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
    backgroundColor: primaryColor,
    paddingHorizontal: 16,
    paddingTop: 25
  }, appTitle:
    { marginHorizontal: 40, fontWeight: 'bold', color: 'white', fontSize: 35 },
  todotitle:
    { marginHorizontal: 40, color: 'white', fontSize: 18, marginBottom: 24 },
  itemsContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 15
  },
  EditorContainer: {
    justifyContent: "space-between",
    position: 'absolute',
    alignSelf: 'center',
    bottom: '10%',
    borderRadius: 10,
    height: 200,
    width: "90%",
    padding: 8,
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  addButton: {
    height: 70,
    width: 70,
    backgroundColor: "#5CC2FF",
    alignSelf: "flex-end",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  EditorTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: primaryColor
  },
  textInput: {
    width: "100%",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    padding: 8
  },
  submitButton: {
    backgroundColor: primaryColor,
    height: 40,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});
