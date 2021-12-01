import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './TableCard.style';

export default function MenuCard({item, onSelect}) {

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View
        style={
          item.isActive ? styles.active_container : styles.disactive_container
        }>
        <View style={styles.image}>
          {item.orders.map((order, index) => (
            <Text key={index} style={styles.order}>
              ⏺ {order.name}
            </Text>
          ))}
        </View>
        <View style={styles.name_container}>
          <Text style={styles.name_label}>{item.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
