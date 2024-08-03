import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button ,TouchableOpacity} from 'react-native';

export default function Addapart() {
const  [title, setTitle] = useState('');
  const[price, setPrice] = useState('');
  const[location, setLocation] = useState('');
  const [discription, setDiscription] = useState('');


  const submitHandler = (value) => {
    const apart=value;
    console.log(value);
    fetch('http://localhost:5000/add-apart',{
      method:'POST',
      headers:{"content-type":"application/json"},
      body:JSON.stringify(apart)
    }).then(()=>{
      console.log("apart added")
    
    })
  }


  return (
    <View>  <TouchableOpacity >
    <TextInput 
    style={styles.input} 
    placeholder='title'
    onChange={(e) => setTitle(e.target.value)}
    value={title} 
  />
  <TextInput 
  style={styles.input} 
  placeholder='price'
  onChange={(e) => setPrice(e.target.value)}
  value={price} 
/>
<TextInput 
style={styles.input} 
placeholder='location'
onChange={(e) => setLocation(e.target.value)}
value={location} 
/>
<TextInput 
style={styles.input} 
placeholder='discription'
onChange={(e) => setDiscription(e.target.value)}
value={discription} 
/>
  </TouchableOpacity>
    
      <Button color='coral' onPress={() => submitHandler({title,discription,price,location})} title='add apartment' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});