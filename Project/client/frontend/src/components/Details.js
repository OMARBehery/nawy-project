import React from 'react';
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";


const Details = () => {




  const { id } = useParams();

    const [apart, setApart] = useState(null);
      
    
  

  const [isPending, setIsPending] = useState(true);



  
  useEffect(() => {
    

      fetch('/apart/'+id)
      .then(res => {
      
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setApart(data.result);
      console.log(data);
      })
    


    // abort the fetch
  
  }, [])

  return (
    <div>
    <div className="blog-details">
    { isPending && <div>Loading...</div> }
  
    { apart && (
      <article>
        <h2>{ apart.title }</h2>
        <h3>price:{ apart.price }</h3>
        <h4>discription:{ apart.discription }</h4>
        <h4>{apart.location}</h4>
      
      </article>
    )}
  </div>
    </div>
  );
}

export default Details;
