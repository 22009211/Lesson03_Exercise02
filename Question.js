import React from "react";
import {View, Text, Image} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Question = ({pic, ans1, ans2, ans3, ans4, ans5, onValueChange})=> {
    return (
        <View>
            <Image source={pic} style={width:500, height:300}}/>
            <Text>What animal is this?</Text>
            <RNPickerSelect
                onValueChange={onValueChange}
                items={[
                    {label: ans1, value: '1'},
                    {label: ans2, value: '2'},
                    {label: ans3, value: '3'},
                    {label: ans4, value: '4'},
                    {label: ans5, value: '5'},
                ]}/>
        </View>
    );
};

export default Question;