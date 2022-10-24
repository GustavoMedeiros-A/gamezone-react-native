import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({route, navigation}) {

  {/**pego os objetos com route.params e passo eles como JSON */}
  const {title, rating, body} = route.params;
  return (
    <View style={globalStyles.container}>
      <Text> {JSON.stringify(title)}</Text>
      <Text> {JSON.stringify(rating)}</Text>
      <Text> {JSON.stringify(body)}</Text>
    </View>
  );
}