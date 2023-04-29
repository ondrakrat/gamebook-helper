import { StyleSheet, View, Text, SafeAreaView, FlatList, Button, TextInput } from "react-native";
import { useState } from 'react';

import { messages } from '../utility/localization';

export default function Inventory() {
    const [inventory, setInventory] = useState([]);
    const [newItem, setNewItem] = useState('');
    const addItem = () => {
        if (!!newItem) {
            setInventory([...inventory, {id: randomId(), name: newItem}]);
            setNewItem('');
        }
    }
    const removeItem = (id) => {
        const newInventory = inventory.filter((it) => it.id !== id);
        setInventory(newInventory);
    }
    return (
        <SafeAreaView>
            <Text style={styles.title}>{messages.inventory}</Text>
            <FlatList
                data={inventory}
                renderItem={({item}) => <View>
                    <Item item={item} removeItem={removeItem} />
                </View>}
                keyExtractor={item => item.id}
            />
            <View style={styles.container}>
                <TextInput
                    style={[styles.input, styles.elementWithButton]}
                    onChangeText={setNewItem}
                    value={newItem}
                />
                <Button
                    title="+"
                    onPress={addItem}
                />
            </View>
        </SafeAreaView>
    );
}

const Item = ({item, removeItem}) => (
    <View style={styles.container}>
      <Text style={styles.elementWithButton}>{item.name}</Text>
      <Button 
        title="-"
        onPress={() => removeItem(item.id)}
      />
    </View>
);

const randomId = () => new Date().getTime();

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    elementWithButton: {
        paddingHorizontal: '3px',
    }
});
