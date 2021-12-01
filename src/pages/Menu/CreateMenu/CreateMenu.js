import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {Alert, SafeAreaView, Text} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import styles from './CreateMenu.styles';

export default function CreateMenu() {
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [ingredients, setIngredients] = useState();
  const [price, setPrice] = useState();

  const route = useRoute();
  const {menu} = route.params;

  function handleNavigateDetail() {
    if (
      name === undefined ||
      description === undefined ||
      ingredients === undefined ||
      price === undefined
    ) {
      Alert.alert('Alanlar Boş Geçilemez');
      return;
    }
    
    const foodDetail = {
      name: name,
      description: description,
      ingredients: ingredients,
      price: price,
    };

    navigation.navigate('MenuDetailPage', {foodDetail});
  }

  return (
    <SafeAreaView>
      <Text style={styles.menu_name}>{menu.name}</Text>
      <Input label="Name" onChangeText={value => setName(value)} />
      <Input
        label="Description"
        onChangeText={value => setDescription(value)}
      />
      <Input
        label="Ingredients"
        onChangeText={value => setIngredients(value)}
      />
      <Input
        label="Price"
        onChangeText={value => setPrice(value)}
        keyboardType="decimal-pad"
      />
      <Button title="Apply Food" onPress={handleNavigateDetail} />
    </SafeAreaView>
  );
}
