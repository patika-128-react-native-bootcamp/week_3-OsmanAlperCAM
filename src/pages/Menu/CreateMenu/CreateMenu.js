import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/core';
import {Alert, SafeAreaView, Text} from 'react-native';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import styles from './CreateMenu.styles';

export default function CreateMenu() {
  const navigation = useNavigation();

  const [foodDetail, setFoodDetail] = useState({
    name: '',
    description: '',
    ingredients: '',
    price: '',
  });

  const route = useRoute();
  const {menu} = route.params;

  function handleNavigateDetail() {
    if (
      foodDetail.name === '' ||
      foodDetail.description === '' ||
      foodDetail.ingredients === '' ||
      foodDetail.price === ''
    ) {
      Alert.alert('Alanlar Boş Geçilemez');
      return;
    }
    navigation.navigate('MenuDetailPage', {foodDetail});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.menu_name}>{menu.name}</Text>
      <Input
        label="Name"
        onChangeText={value => setFoodDetail({...foodDetail, name: value})}
      />
      <Input
        label="Description"
        onChangeText={value =>
          setFoodDetail({...foodDetail, description: value})
        }
      />
      <Input
        label="Ingredients"
        onChangeText={value =>
          setFoodDetail({...foodDetail, ingredients: value})
        }
      />
      <Input
        label="Price"
        onChangeText={value => setFoodDetail({...foodDetail, price: value})}
        keyboardType="decimal-pad"
      />
      <Button title="Apply Food" onPress={handleNavigateDetail} />
    </SafeAreaView>
  );
}
