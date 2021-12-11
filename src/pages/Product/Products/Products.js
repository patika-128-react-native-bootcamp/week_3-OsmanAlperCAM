import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ProductCard from '../../../components/cards/ProductCard/';
import mockData from '../../../MOCK_DATA.json';

export default function Products() {
  const navigation = useNavigation();

  function navigate(selectedProduct) {
    navigation.navigate('ProductDetailPage', {product: selectedProduct});
  }
  const renderProductCard = ({item}) =>{
    return(<ProductCard item={item} onSelect={() => navigate(item)} />);
  }

  return (
    <SafeAreaView>
      <FlatList
        data={mockData.products}
        keyExtractor={item => item.p_id}
        renderItem={renderProductCard}
      />
    </SafeAreaView>
  );
}
