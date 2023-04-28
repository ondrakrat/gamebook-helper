import { StyleSheet, Text, View } from 'react-native';

import { messages } from '../constants/localization';

export default function AdventureSheet() {
    return (
        <View>
            <Text style={styles.title}>{messages.adventureSheet}</Text>
            <Text>{messages.skill}</Text>
            <Text>{messages.stamina}</Text>
            <Text>{messages.luck}</Text>
            <Text style={styles.title}>{messages.inventory}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
