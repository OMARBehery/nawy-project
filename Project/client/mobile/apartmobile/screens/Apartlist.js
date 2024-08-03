

 import React from 'react';


import  { useState , useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard ,ScrollView} from 'react-native';
import Header from './Header';
import Addapart from './Addapart';
import Apartitem from './Apartitem';
export default function Apartlist({ navigation }) {
  
  const [apart,setApart]=useState(null)


  




  useEffect(()=>{
   

  

  
   fetch('http://localhost:5000/apart-list')
   .then(response => {
       
    
   
      return response.json();
    })
     .then((res)=>
     {
    let list=res.result

      setApart(list)
   
   console.log(res.result)
      
  })
     .catch(err=>{
       console.log(err);
     });
   
  },[])
 

    return (
      <ScrollView>

  
      <View style={styles.container}>
      <Header/>
        <View style={styles.content}>
          <Addapart />
          <View style={styles.list}>
            <FlatList
              data={apart}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                <Apartitem item={item}  />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    

  
      </ScrollView>
    
    
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      padding: 40,
    },
    list: {
      marginTop: 20,
    },
  });
  
