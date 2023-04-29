import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

import { messages } from '../constants/localization';

export default function AdventureSheet() {
    const [initialSkill, setInitialSkill] = useState(6);
    const [initialStamina, setInitialStamina] = useState(12);
    const [initialLuck, setInitialLuck] = useState(6);
    const [skill, setSkill] = useState(initialSkill);
    const [stamina, setStamina] = useState(initialStamina);
    const [luck, setLuck] = useState(initialLuck);
    return (
        <View>
            <Text style={styles.title}>{messages.adventureSheet}</Text>
            <View>
                <Text>{messages.skill}</Text>
                <View style={styles.container}>
                    {changeAttribute(skill, setSkill, -1)}
                    <Text style={styles.skillValue}>{skill}/{initialSkill}</Text>
                    {changeAttribute(skill, setSkill, 1)}
                </View>
            </View>
            <View>
                <Text>{messages.stamina}</Text>
                <View style={styles.container}>
                    {changeAttribute(stamina, setStamina, -1)}
                    <Text style={styles.skillValue}>{stamina}/{initialStamina}</Text>
                    {changeAttribute(stamina, setStamina, 1)}
                </View>
            </View>
            <View>
                <Text>{messages.luck}</Text>
                <View style={styles.container}>
                    {changeAttribute(luck, setLuck, -1)}
                    <Text style={styles.skillValue}>{luck}/{initialLuck}</Text>
                    {changeAttribute(luck, setLuck, 1)}
                </View>
            </View>
            <Text style={styles.title}>{messages.inventory}</Text>
        </View>
    );
}

function changeAttribute(currentValue, setter, delta) {
    return (
        <Button
            onPress={() => setter(currentValue + delta)}
            title={Math.sign(delta > 0) ? "+" : "-"}
        />
    )
}

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
    skillValue: {
        paddingHorizontal: '3px',
        fontWeight: 'bold',
    }
});
