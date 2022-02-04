import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { SetStateAction, Dispatch } from 'react';
import CheckBox from 'expo-checkbox';
import { AntDesign, Entypo } from '@expo/vector-icons';

const TodoItem = ({ item, onPress }: {
    item: { title: string, id: string },
    onPress: Dispatch<SetStateAction<{ id: string, title: string }[]>>
}) => {

    const deleteItem = () => {

        console.log(item.id);
    }
    return (
        <View
            style={styles.itemContainer}>
            <TouchableOpacity onPress={deleteItem}>
                <AntDesign
                    style={styles.rightSpace}
                    name="delete"
                    size={24}
                    color="#5CC2FF" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Entypo
                    style={styles.rightSpace}
                    name="edit"
                    size={24}
                    color="#5CC2FF" />
            </TouchableOpacity>
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
