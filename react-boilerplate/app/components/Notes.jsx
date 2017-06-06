import React, {Component} from 'react';
import Note from './Note';

class Notes extends Component{

  render(){
    return(
    <ul>{this.props.notes.map(note=>
      <Note id={note.id} task={note.task} onDelete={this.props.onDelete}/>
      )}
    </ul>
    );
  }
}

export default Notes;
