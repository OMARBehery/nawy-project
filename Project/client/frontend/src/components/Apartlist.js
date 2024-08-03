/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {useState,useEffect} from 'react';
import { Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './landing-background.webp'
import { Link } from "react-router-dom";

const Apartlist = () => {


const [apart,setApart]=useState(null)
const [isPending,setIsPending]=useState(true)
  useEffect(()=>{
 
    fetch('/apart-list').then(res => {
      
    // console.log(res.json());
  
     return res.json();
   })
    .then(res=>{
   let list=res.result;
     setApart(list);
     setIsPending(false)
  console.log(res.result);
     
    })
    .catch(err=>{
      console.log(err);
    })
  
  
  
},[])
  


  return (
    <>
    {isPending && <>Loading apartments......</> }
    {apart &&     <div>
        <h1 className='text-center my-5' style={{color:'  rgb(35,41,122)'}}>Apartment List</h1>
      <div className='container'>
      <div className='row'>
      {apart.map(item => (
        
        <div className='col-md-3'>
        <div className="card" >
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.location}</p>
          <Link to={`/apart/${item._id}`} className="btn btn-primary">Details</Link>
        </div>
      </div>
      </div>
  
      ))}
      </div>
      </div>
    
      </div>}
    </>
    


  );
}

export default Apartlist;
