import React, {Component} from 'react';
import Note from './Note';

class Notes extends Component{

  render(){
    return(
    <ul className="notes">{this.props.notes.map(note=>
      <Note   checkEnter={this.props.checkEnter} editNote={this.props.editNote} id={note.id} task={note.task} onDelete={this.props.onDelete} editing={note.editing} clickNote={this.props.clickNote}/>
      )}
    </ul>
    );
  }
}

export default Notes;
