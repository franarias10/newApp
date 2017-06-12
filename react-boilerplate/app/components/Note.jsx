import React, {Component} from 'react';


class Note extends  Component{

  render(){

    if (this.props.editing) {
      return(

          <li className="note editable"><input  autoFocus={true} onKeyPress={this.props.checkEnter.bind(null,this.props.id)} onBlur={this.props.editNote.bind(null,this.props.id)} type="text" defaultValue={this.props.task} /> <button className="note delete" onClick={this.props.onDelete.bind(null,this.props.id)}>X</button></li>

      );
    }
    else {
      return(

          <li className="note" onClick={this.props.clickNote.bind(null,this.props.id)}><a >{this.props.task}</a>  <button className="note delete" onClick={this.props.onDelete.bind(null,this.props.id)}>X</button></li>

      );
    }
  }
}

export default Note;
