import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

import { messages } from '../constants/localization';

export default function AdventureSheet() {
    const [skill, setSkill] = useState(6);
    const [stamina, setStamina] = useState(12);
    const [luck, setLuck] = useState(6);
    return (
        <View>
            <Text style={styles.title}>{messages.adventureSheet}</Text>
            <View>
                <View>
                    {changeAttribute(skill, setSkill, -1)}
                    <Text>{messages.skill}: {skill}</Text>
                    {changeAttribute(skill, setSkill, 1)}
                </View>
                <View>
                    {changeAttribute(stamina, setStamina, -1)}
                    <Text>{messages.stamina}: {stamina}</Text>
                    {changeAttribute(stamina, setStamina, 1)}
                </View>
                <View>
                    {changeAttribute(luck, setLuck, -1)}
                    <Text>{messages.luck}: {luck}</Text>
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
});
