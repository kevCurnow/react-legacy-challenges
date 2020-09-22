import React, { Component } from 'react';
 
const CatList = (props) => {
 return (
   <div>
     {props.cats.map(function(cat, i){
       return <li key={i}>{cat}</li>
     } )}
   </div>
 )
}
 
export default CatList;
