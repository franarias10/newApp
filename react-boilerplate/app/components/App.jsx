import React, {Component} from 'react';
import uuid from 'uuid';
import Notes from './Notes';
import connect from '../libs/connect.jsx';
import NoteActions from '../actions/NoteActions';



class App extends Component{
  constructor(props){
    super(props);

    //pisamos el THIS por el del componente para que cuando se llame el onlclick no referencie a null
    //se usa bind() para asociar un metodo como metodo del componente
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.clickNote = this.clickNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
  }

  //metodo que edita una nota
  editNote(id, e){
    const value = e.target.value;

    this.props.NoteActions.update({
      id: id,
      task: value,
      editing: false
    });
  }

  //metodo que checkea si se presiono ENTER
  checkEnter(id,e){
    if (e.key === 'Enter') {
      this.editNote(id,e)
    }
  }

  //metodo que agrega una nota
  addNote() {
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'nueva tarea'
    })
  }

  //metodo que elimina una nota
  deleteNote(id,e){
    // Avoid bubbling to edit --> con esto activamos solo este metodo y no los gatillamos los demas click que se hacen
    e.stopPropagation();
    this.props.NoteActions.delete(id);
  }

  clickNote(id){
    this.props.NoteActions.update({
      id: id,
      editing: true
    });
  }

  render(){
    const {notes} = this.props;
    return(
      <div>
        <button  className="add-note" onClick={this.addNote}>+</button>
        <Notes checkEnter={this.checkEnter} editNote={this.editNote} notes={notes} onDelete={this.deleteNote} clickNote={this.clickNote}/>
      </div>

    );
  }

}

export default connect(({notes})=>({
  notes
}),
{
 NoteActions
})(App);
