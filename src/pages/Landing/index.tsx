import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import styudyIcon from '../../assets/images/icons/study.png';
import giveIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';


function Landing(){
  const { navigate } = useNavigation();
  const [ totalConnections, setTotalConnections ] = useState(0);

  useEffect(() => {
    api.get('connections').then(Response => {
      const { total } = Response.data;

      setTotalConnections(total);
    })
  }, [])

  function handleNavigateToGiveClasses(){
    navigate('GiveClasses');
  }

  function handleNavigateToStudy() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonContainer}>
        <RectButton onPress={handleNavigateToStudy} style={[styles.button, styles.buttonPrimary]}>
          <Image source={styudyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton onPress={handleNavigateToGiveClasses} style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveIcon} />

          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.connections}>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon}/>
      </Text>
    </View>
  )
};

export default Landing;