import { View, Text, Image, Button, Pressable, TextInput, FlatList, ScrollView } from 'react-native';
import store from './Redux';
import  axios  from 'axios';
import { useState } from 'react';
export default function Screen2({navigation}) {
    const[inputmoney,setInputmoney] =useState(store.getState().inputmoney)
    const[outputmoney,setOutputmoney] =useState(store.getState().outputmoney)
    const[balance,setBalance] =useState(store.getState().balance)
    const update=async(id,obj)=>{
        try {
            const res=await axios.put("https://6540a53a45bedb25bfc23dad.mockapi.io/todo/"+id,obj)
            if(res.data){
                store.dispatch({type:"update",payload:res.data});
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <View>
     <Text>Hello Screen2</Text>
     <TextInput
     placeholder='Input money'
     value={inputmoney}
     onChangeText={(text)=>{
        store.dispatch({type:"input",payload:text})
        setInputmoney(text)}}
     />
       <TextInput
     placeholder='Output money'
     value={outputmoney}
     onChangeText={(text)=>{
        setOutputmoney(text)
        store.dispatch({type:"output",payload:text})
    }}
     />
       <TextInput
     placeholder='Balance'
     value={balance}
     onChangeText={(text)=>{setBalance(text)}}
     />
     <Button
     title='CHÊNH LỆCH THU CHI'
     onPress={()=>{
        store.dispatch({type:"balance",payload:inputmoney-outputmoney})
        setBalance(inputmoney-outputmoney)
     }}
     ></Button>
     <Button
     title='ĐỒNG BỘ DỮ LIỆU'
     onPress={()=>{
        update(store.getState().id,
        {inputmoney:store.getState().inputmoney,
            outputmoney:store.getState().outputmoney,
            balance:store.getState().balance,
        })
     }}
     ></Button>
    </View>
  );
}
