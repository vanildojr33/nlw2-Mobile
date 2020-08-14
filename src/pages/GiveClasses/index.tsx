import React from 'react';
import { Text, ImageBackground, View } from 'react-native';

import giveBg from '../../assets/images/give-classes-background.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface GiveClassesProps {}

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack(){
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" source={giveBg} style={styles.content}>

        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;

