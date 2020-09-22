import React, { Component } from 'react';
import {Input} from 'reactstrap';
 
export default class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      filteredThings: []
    }
  } 
  
 componentDidMount() {
   this.setState({
     filteredThings: this.state.things
   });
   console.log(this.state.filteredThings);
 }


 searchFunction(e) {
    let currentThings = [];
    let newThings = [];
    console.log(this.state.things);
    
    if (e.target.value !== "") {
      currentThings = this.state.things;
      newThings = currentThings.filter(item => {
        const lower = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lower.includes(filter)
      });
    } else {
      newThings = this.state.things;
    }

    this.setState({
      filteredThings: newThings
    });
 }

 render() {
   return(
    <div>
    <Input placeholder='Search Here' onChange={(e) => this.searchFunction(e)}/>
    <h3>Results: {this.state.filteredThings}</h3>
  </div>
   )
     
 }

 
}
