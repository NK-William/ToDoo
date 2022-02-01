import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TodoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>ToDoo</Text>
      <Text style={styles.todotitle}>2 Tasks</Text>
      <View style={styles.itemsContainer}></View>
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
  itemsContainer: { flex: 1, backgroundColor: "white", borderRadius: 40 }
});
