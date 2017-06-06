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

    //pisamos el THIS por el del componente para que cuando se llame el onlclick no referencie a null
    //se usa bind() para asociar un metodo como metodo del componente
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  //metodo que agrega una nota
  addNote() {
  this.setState({
     notes: this.state.notes.concat([{
     id: uuid.v4(),
     task: 'new Task'
     }])
   });
  }

  //metodo que elimina una nota
  deleteNote(id){
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }


  render(){
    return(
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={this.state.notes} onDelete={this.deleteNote}/>
      </div>

    );
  }

}

export default App;
