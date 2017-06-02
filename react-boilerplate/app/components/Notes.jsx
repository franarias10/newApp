import React, {Component} from 'react';




class Notes extends Component{

  render(){
    return(
    <ul>{this.props.notes.map(note=>
      <li Key={note.id}>{note.task}</li>
      )}
    </ul>
    );
  }
}

export default Notes;
