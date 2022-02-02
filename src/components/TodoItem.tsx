import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CheckBox from 'expo-checkbox';
import { AntDesign, Entypo } from '@expo/vector-icons';

const TodoItem = ({ item }: { item: { title: string, id: string } }) => {
    return (
        <View
            style={styles.itemContainer}>
            <AntDesign
                style={styles.rightSpace}
                name="delete"
                size={24}
                color="#5CC2FF" />
            <Entypo
                style={styles.rightSpace}
                name="edit"
                size={24}
                color="#5CC2FF" />
            <Text>{item.title}</Text>
            <View style={{ flex: 1 }}></View>
            <CheckBox
                disabled={false}
                value={false}
                onValueChange={(newValue) => null}
                color="#5CC2FF"
            />
        </View>
    );
};

export default TodoItem;

const styles = StyleSheet.create({
    itemContainer:
    {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 8,
        paddingVertical: 2
    },
    rightSpace:
        { marginRight: 7 }
});
