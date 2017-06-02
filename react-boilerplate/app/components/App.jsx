import React, {Component} from 'react';
import uuid from 'uuid';
import Notes from './Notes';




class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      notes :[
        {
          id: uuid.v4(),
          task: 'tarea nro 1'
        },
        {
          id: uuid.v4(),
          task: 'tarea nro 2'
        }
      ]
    };
  }

  addNote = () => {
   this.setState({
     notes: this.state.notes.concat([{
     id: uuid.v4(),
     task: 'new Task'
     }])
   });
  }


  render(){
    //const {notes} = this.state;
    return(
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={this.state.notes} />
      </div>

    );
  }

}

export default App;
