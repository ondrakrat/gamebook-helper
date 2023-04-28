import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { messages } from './constants/localization';

import AdventureSheet from './component/AdventureSheet';

const defaultLocale = localStorage['locale'] ? localStorage['locale'] : 'cz'; // English is default locale if none is set
const localeList = [
    { name: 'English', code: 'en', lang: 'English' },
    { name: 'Čeština', code: 'cz', lang: 'Czech' }
];

export default function App() {
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);
  const onChangeLanguage = (e) => {
      const selectedLocale = e.target.value;
      setCurrentLocale(selectedLocale);
      localStorage.setItem('locale',selectedLocale);
      messages.setLanguage(selectedLocale);
      console.log(`Language changed to ${selectedLocale}`);
  }
  messages.setLanguage(currentLocale); // hack?
  return (
    <View style={styles.container}>
      <select onChange={onChangeLanguage} defaultValue={currentLocale}>
            {
                localeList.map((locale,index)=>(
                  <option key={index} value={locale.code}>{locale.name}</option>
                ))
            }
        </select>
      <AdventureSheet />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
