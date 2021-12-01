import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Button from '../../../components/Button';

import styles from './TableUpdate.styles';

const mapOrders = (order, index) => (
  <View key={index} style={styles.order_container}>
    <Text style={styles.order_name}>⏺ {order.name}</Text>
    <Text key={index} style={styles.order_price}>
      {order.price} TL
    </Text>
  </View>
);

export default function TableUpdate() {
  const navigation = useNavigation();
  const route = useRoute();
  const {table} = route.params;

  function handleCloseTable() {
    navigation.navigate('TablesPage', {
      updatedTable: {...table, isActive: false},
    });
  }
  try {
    const {price: total} = table.orders.reduce((previous, current) => ({
      price: previous.price + current.price,
    }));
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.name_label}>{table.name}</Text>
          {table.orders.map(mapOrders)}
          <Text style={styles.total}>Total {total} TL</Text>
        </View>
        {table.isActive && (
          <Button title="Close Table" onPress={handleCloseTable} />
        )}
      </SafeAreaView>
    );
  } catch (error) {
    return (
      <View style={styles.error_container}>
        <Text style={styles.error_text}>Bu masa boş...</Text>
      </View>
    );
  }
}
