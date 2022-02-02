import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TodoItem = ({ item }: { item: { title: string, id: string } }) => {
    return (
        <View>
            <Text>{item.title}</Text>
        </View>
    );
};

export default TodoItem;

const styles = StyleSheet.create({});
