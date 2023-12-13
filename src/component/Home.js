import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity, TextInput,ImageBackground, Button } from "react-native";
import axios from "axios";
import store from './Redux'
function Home({navigation}) {
const[username,setUserName]=useState("")
const[password,setPassword]=useState("")
const[account,setAccount]=useState([])
const[error,setError]=useState("")
const login=()=>{
  account.forEach(a=>{
    if(a.name==username&&a.password==password)
    {
    store.dispatch({type:"save",payload:a})
      navigation.navigate("Screen2",{})
      alert("Đăng nhập thành công")
    }
  })
}
const fetch=async()=>{
  try {
    const res=await axios.get("https://6540a53a45bedb25bfc23dad.mockapi.io/todo")
    if(res.data){
      setAccount(res.data)
    }
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{
  fetch();
},[])
  return (
   <View>
    <Text>{error}</Text>
    <TextInput
    placeholder="Nhập tên user"
    value={username}
    onChangeText={(text)=>setUserName(text)}
    style={{height:50,borderWidth:1}}
    />
        <TextInput
    placeholder="Nhập password"
    value={password}
    onChangeText={(text)=>setPassword(text)}
    style={{height:50,borderWidth:1}}
    />
    <Button
    title="ĐĂNG NHẬP"
    onPress={login}
    ></Button>
   </View>
  );
}

export default Home;
