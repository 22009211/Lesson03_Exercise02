import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function App() {
  const [ans1, setAns1] = useState('elephant')
  const [ans2, setAns2] = useState('leopard')
  const [ans3, setAns3] = useState('kingfisher')
    const [ans4, setAns4] = useState('owl')
    const [ans5, setAns5] = useState('bee')
  return (
    <View style={styles.container}>
      <Text>GUESS THE ANIMALS size={50}</Text>

      <Image source={require('./img/elephant.jpg')}
      <Text>What animal is this?</Text>
      <RNPickerSelect
          onValueChange={(value) => setAns1(value)}
          items={
            [
              { label: 'Bee', value: 'bee' },
              { label: 'Crocodile', value: 'crocodile' },
              { label: 'Deer', value: 'deer' },
              { label: 'Elephant', value: 'elephant' },
              { label: 'Giraffe', value: 'giraffe' },
              { label: 'Hummingbird', value: 'hummingbird' },
              { label: 'Kingfisher', value: 'kingfisher' },
              { label: 'Leopard', value: 'leopard' },
              { label: 'Owl', value: 'owl' },
              { label: 'Peacock', value: 'peacock' },
              { label: 'Penguin', value: 'penguin' },
              { label: 'Rabbit', value: 'rabbit' },
              { label: 'Squirrel', value: 'squirrel' },
              { label: 'Tiger', value: 'tiger' },
              { label: 'Turtle', value: 'turtle' },
              { label: 'Zebra', value: 'zebra' },
            ]
          }
      />

      <Image source={require('./img/leopard.jpg')}
      <Text>What animal is this?</Text>
      <RNPickerSelect
          onValueChange={(value) => setAns2(value)}
          items={
            [
              { label: 'Bee', value: 'bee' },
              { label: 'Crocodile', value: 'crocodile' },
              { label: 'Deer', value: 'deer' },
              { label: 'Elephant', value: 'elephant' },
              { label: 'Giraffe', value: 'giraffe' },
              { label: 'Hummingbird', value: 'hummingbird' },
              { label: 'Kingfisher', value: 'kingfisher' },
              { label: 'Leopard', value: 'leopard' },
              { label: 'Owl', value: 'owl' },
              { label: 'Peacock', value: 'peacock' },
              { label: 'Penguin', value: 'penguin' },
              { label: 'Rabbit', value: 'rabbit' },
              { label: 'Squirrel', value: 'squirrel' },
              { label: 'Tiger', value: 'tiger' },
              { label: 'Turtle', value: 'turtle' },
              { label: 'Zebra', value: 'zebra' },
            ]
          }
      />

      <Image source={require('./img/kingfisher.jpg')}
      <Text>What animal is this?</Text>
      <RNPickerSelect
          onValueChange={(value) => setAns3(value)}
          items={
            [
              { label: 'Bee', value: 'bee' },
              { label: 'Crocodile', value: 'crocodile' },
              { label: 'Deer', value: 'deer' },
              { label: 'Elephant', value: 'elephant' },
              { label: 'Giraffe', value: 'giraffe' },
              { label: 'Hummingbird', value: 'hummingbird' },
              { label: 'Kingfisher', value: 'kingfisher' },
              { label: 'Leopard', value: 'leopard' },
              { label: 'Owl', value: 'owl' },
              { label: 'Peacock', value: 'peacock' },
              { label: 'Penguin', value: 'penguin' },
              { label: 'Rabbit', value: 'rabbit' },
              { label: 'Squirrel', value: 'squirrel' },
              { label: 'Tiger', value: 'tiger' },
              { label: 'Turtle', value: 'turtle' },
              { label: 'Zebra', value: 'zebra' },
            ]
          }
      />

      <Image source={require('./img/owl.jpg')}
      <Text>What animal is this?</Text>
      <RNPickerSelect
          onValueChange={(value) => setAns4(value)}
          items={
              [
                  { label: 'Bee', value: 'bee' },
                  { label: 'Crocodile', value: 'crocodile' },
                  { label: 'Deer', value: 'deer' },
                  { label: 'Elephant', value: 'elephant' },
                  { label: 'Giraffe', value: 'giraffe' },
                  { label: 'Hummingbird', value: 'hummingbird' },
                  { label: 'Kingfisher', value: 'kingfisher' },
                  { label: 'Leopard', value: 'leopard' },
                  { label: 'Owl', value: 'owl' },
                  { label: 'Peacock', value: 'peacock' },
                  { label: 'Penguin', value: 'penguin' },
                  { label: 'Rabbit', value: 'rabbit' },
                  { label: 'Squirrel', value: 'squirrel' },
                  { label: 'Tiger', value: 'tiger' },
                  { label: 'Turtle', value: 'turtle' },
                  { label: 'Zebra', value: 'zebra' },
              ]
          }
      />

      <Image source={require('./img/bee.jpg')}
      <Text>What animal is this?</Text>
      <RNPickerSelect
          onValueChange={(value) => setAns5(value)}
          items={
              [
                  { label: 'Bee', value: 'bee' },
                  { label: 'Crocodile', value: 'crocodile' },
                  { label: 'Deer', value: 'deer' },
                  { label: 'Elephant', value: 'elephant' },
                  { label: 'Giraffe', value: 'giraffe' },
                  { label: 'Hummingbird', value: 'hummingbird' },
                  { label: 'Kingfisher', value: 'kingfisher' },
                  { label: 'Leopard', value: 'leopard' },
                  { label: 'Owl', value: 'owl' },
                  { label: 'Peacock', value: 'peacock' },
                  { label: 'Penguin', value: 'penguin' },
                  { label: 'Rabbit', value: 'rabbit' },
                  { label: 'Squirrel', value: 'squirrel' },
                  { label: 'Tiger', value: 'tiger' },
                  { label: 'Turtle', value: 'turtle' },
                  { label: 'Zebra', value: 'zebra' },
              ]
          }
      />

      <Button
          onPress={() => { Alert.alert("You have answers " + " correct answers!") }}
          title="Submit Answers"
      />

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