import React, {Component} from 'react';

class Note extends  Component{


  render(){
    return(
      <div>
        <li Key={this.props.id}>{this.props.task} <button onClick={this.props.onDelete.bind(null,this.props.id)}>X</button></li>
      </div>
    );
  }
}

export default Note;
