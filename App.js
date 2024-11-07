import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, Alert, ScrollView, StatusBar, ToastAndroid} from 'react-native';
import Question from "./Question";
import Icon from 'react-native-vector-icons/FontAwesome6';

const styles = StyleSheet.create({
    title: {
        margin: 10,
        textAlign: 'center',
        backgroundColor: 'white',
    },
    quiz: {
        flexDirection: 'column',
        backgroundColor: 'white',
    }
});

const Quiz = ()=> {
    const [ans1, setAns1] = useState('0');
    const [ans2, setAns2] = useState('0');
    const [ans3, setAns3] = useState('0');
    const [ans4, setAns4] = useState('0');
    const [ans5, setAns5] = useState('0');
    const correct1 = "3";
    const correct2 = "5";
    const correct3 = "4";
    const correct4 = "2";
    const correct5 = "1";

    return (
        <ScrollView style={styles.quiz}>
    <Question pic={require('./img/elephant.jpg')}
              ans1="Rhino" ans2="Bee" ans3="Elephant" ans4="Owl" ans5="Rabbit"
              onValueChange={(value) => setAns1(value)}
    <Question pic={require('./img/zebra.jpg')}
              ans1="Peacock" ans2="Kingfisher" ans3="Crocodile" ans4="Deer" ans5="Zebra"
              onValueChange={(value) => setAns2(value)}
    <Question pic={require('./img/penguin.jpg')}
              ans1="Hummingbird" ans2="Bee" ans3="Elephant" ans4="Penguin" ans5="Giraffe"
              onValueChange={(value) => setAns3(value)}
    <Question pic={require('./img/tiger.jpg')}
              ans1="Elephant" ans2="Tiger" ans3="Leopard" ans4="Deer" ans5="Rabbit"
              onValueChange={(value) => setAns4(value)}
    <Question pic={require('./img/owl.jpg')}
              ans1="Owl" ans2="Penguin" ans3="Squirrel" ans4="Turtle" ans5="Zebra"
              onValueChange={(value) => setAns5(value)}

      <Button
          title = "Submit Answers"
          onPress={
              () =>{
          let score = 0;
          if(ans1==correct1){
                score++
    }
          if(ans2==correct2){
                score++
    }
          if(ans3==correct3){
                score++
    }
          if(ans4==correct4){
                score++
    }
          if(ans5==correct5){
                score++
    }
          Alert.alert("You have answers " + score + " correct answers!")
      }
      }
      >
        </Button>
    </ScrollView>
  );
};

export default Quiz;