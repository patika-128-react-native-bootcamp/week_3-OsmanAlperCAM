import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './TableCard.style';

export default function MenuCard({item, onSelect}) {
  const variant = item.isActive ? 'active' : 'not_active';

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles[variant].container}>
        <View style={styles[variant].image}>
          {item.orders.map((order, index) => (
            <Text key={index} style={styles[variant].order}>
              ⏺ {order.name}
            </Text>
          ))}
        </View>
        <View style={styles[variant].name_container}>
          <Text style={styles[variant].name_label}>{item.name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
