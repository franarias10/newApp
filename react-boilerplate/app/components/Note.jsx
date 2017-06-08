import React, {Component} from 'react';

class Note extends  Component{


  render(){
    if (this.props.editing) {
      return(
        <div>
          <li Key={this.props.id}><input type="text" defaultValue={this.props.task} /> <button onClick={this.props.onDelete.bind(null,this.props.id)}>X</button></li>
        </div>
      );
    }
    else {
      return(
        <div>
          <li Key={this.props.id}><a onClick={this.props.clickNote.bind(null,this.props.id)}>{this.props.task}</a>  <button onClick={this.props.onDelete.bind(null,this.props.id)}>X</button></li>
        </div>
      );
    }

  }
}

export default Note;
