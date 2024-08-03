import React from 'react'
import {StyleSheet, TouchableOpacity, Text,View,Image} from 'react-native';
import Card from './Card';
export default function Apartitem({ pressHandler, item }) {
  return (
    <TouchableOpacity >
    <View>
  <Card>
  <Image  style={styles.img} source={require('./landing-background.webp')}/>
  <Text style={styles.item}>title:{item.title}</Text>
  <Text style={styles.item}>price:{item.price}</Text>
  <Text style={styles.item}>discription:{item.discription}</Text>
  <Text style={styles.item}>location:{item.location}</Text>
  

  
  
  </Card>
  

    
    </View>
  
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  },
  img:{
    maxHeight:300 ,
    maxWidth:300
  }
});