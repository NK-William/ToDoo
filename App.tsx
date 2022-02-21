import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoScreen from './src/screens/TodoScreen';
import { Provider } from "./src/context/TodoContext";

export default function App() {
  return (
    // <Provider>
    <TodoScreen />
    // </Provider>
  )
}

const styles = StyleSheet.create({});
