import { useState } from "react";
import { Link } from "react-router-dom";
const Addapart = () => {


  const [image, setImage] = useState('');
  const [base64String, setBase64String] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [discription, setDiscription] = useState('');
  const [isPending,setIsPending]=useState(false);
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(file);
        setBase64String(reader.result.split(',')[1]);
  
      };
    }
  
  };

const submit=(e)=>{
e.preventDefault();
const apart={title,discription,price,location,base64String}
console.log(apart);
setIsPending(true);

fetch('http://localhost:5000/add-apart',{
  
  method:'POST',
  headers:{"content-type":"application/json"},
  body:JSON.stringify(apart)
}).then(()=>{
  console.log("apart added")
  setIsPending(false)
})

}

  return (
    <div className="create">
      <h2>Add apartment</h2>
      <form onSubmit={submit}>
        <label>title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>price:</label>
        <input 
          type="text" 
          required 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>discription:</label>
        <textarea
          required
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
        ></textarea>
        <label>location:</label>
        <input 
          type="text" 
          required 
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
         type="file"
          accept="image/*" 
      
          onChange={handleImageChange} />
      
      {!isPending &&   <button >Add apartment</button>}
      {isPending &&   <button disabled>Adding apart....</button>}
        
      </form>
    </div>
  );
}
 
export default Addapart;