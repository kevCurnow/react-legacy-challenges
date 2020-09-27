import React, {Component} from 'react';
import {Input, Form, Button, Table} from 'reactstrap';
import ToDoList from './ToDoList';


export default class ToDoIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
          taskArray: [],
          task: {
              taskDescription: '',
              taskCompleted: false
          }
        }
        this.toggleCheckboxValue = this.toggleCheckboxValue.bind(this);
      }
    
      taskFunction(e) {
        e.preventDefault();
        this.state.taskArray.push(this.state.task);
        console.log(this.state.taskArray);
        this.setState({
            taskArray: this.state.taskArray
        })
        console.log(this.state.taskArray);
      }

      handleInputChange(e) {
         this.setState({
             task: {
                 taskDescription: e.target.value,
                 taskCompleted: this.state.task.taskCompleted
             }});   
        console.log(this.state.task.taskCompleted);
      }

      toggleCheckboxValue(e) {
          console.log(this.state.task);
        console.log(e.target.checked);
        console.log(this.state.taskArray.indexOf(this.state.task), this.state.task);
          
          
          this.setState({
              task: {
                  taskDescription: this.state.task.taskDescription,
                taskCompleted: !this.state.task.taskCompleted
              }
          });
          console.log(this.state.task);
          console.log(this.state.task.taskCompleted);
      }

      render() {
          return(
              <div>
                  <Form onSubmit={(e) => this.taskFunction(e)}>
                    <Input placeholder='Task To Complete' type="text" onChange={(e) => this.handleInputChange(e)}/>
                    <Button type="submit">Submit Task</Button>
                  </Form>
                  {/* <ToDoList toggleCheck={this.toggleCheckboxValue} tasks={this.state.taskArray} /> */}
                  <Table>
           <thead>
               <tr>
                   <th>#</th>
                   <th>Task Description</th>
                   <th>Task Completed?</th>
                   <th>Check</th>
               </tr>
           </thead>
           <tbody>
               {this.state.taskArray.map((toDo, index) => {
                   return (
                       <tr key={index}>
                           <td>{index}</td>
                           <td>{toDo.taskDescription}</td>
                           <td>{toDo.taskCompleted.toString()}</td>
                           <td><input type="checkbox" value={toDo.taskCompleted} onChange={this.setState ({
                               task: {
                                   taskDescription: toDo.taskDescription,
                                   taskCompleted: !toDo.taskCompleted
                               }
                           })} /></td>
                       </tr>
                   )
               })}
           </tbody>
       </Table>
              </div>
          );
      }
}

