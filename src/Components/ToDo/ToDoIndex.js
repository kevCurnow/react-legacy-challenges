import React, {Component} from 'react';
import {Input, Form, Button} from 'reactstrap';
import ToDoList from './ToDoList';

export default class ToDoIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
          taskArray: [],
          task: '',
          taskCompleted: false
        }
      }
    
      taskFunction(e) {
          e.preventDefault();
        this.state.taskArray.push(this.state.task);
      }

      handleInputChange(e) {
         this.setState({task: e.target.value});   
      }

      render() {
          return(
              <div>
                  <Form onSubmit={(e) => this.taskFunction(e)}>
                    <Input placeholder='Task To Complete' type="text" onChange={(e) => this.handleInputChange(e)}/>
                    <Button type="submit">Submit Task</Button>
                  </Form>
                  <ul>
                  <ToDoList toDos={this.state.taskArray} />
                  </ul>
              </div>
          );
      }
}

