import React, { Component } from 'react';
import { Label, Input } from 'reactstrap';

const ToDoList = (props) => {
    console.log(props.toDos);
    return (
      <div>
        {props.toDos.map(function(toDo, i){
          return <li key={i}>{toDo}</li>
        } )}
      </div>
    )
   }
    
   export default ToDoList;