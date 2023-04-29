import { StyleSheet, View, Text, Button } from "react-native";
import { useState } from 'react';

import { messages } from '../utility/localization';

export default function StartFight({ initialSkill, initialStamina }) {
    const [enemySkill, setEnemySkill] = useState(initialSkill);
    const [enemyStamina, setEnemyStamina] = useState(initialStamina);
    return (
        <View>
            <Text style={styles.title}>{messages.combat}</Text>
            <View>
                <Text>{messages.skill}</Text>
                <View style={styles.container}>
                    {changeAttribute(enemySkill, setEnemySkill, -1)}
                    <Text style={styles.skillValue}>{enemySkill}</Text>
                    {changeAttribute(enemySkill, setEnemySkill, 1)}
                </View>
            </View>
            <View>
                <Text>{messages.stamina}</Text>
                <View style={styles.container}>
                    {changeAttribute(enemyStamina, setEnemyStamina, -1)}
                    <Text style={styles.skillValue}>{enemyStamina}</Text>
                    {changeAttribute(enemyStamina, setEnemyStamina, 1)}
                </View>
            </View>
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
    },
});
