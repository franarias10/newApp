import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';


class NoteStore{
  constructor(){
    this.notes = [
      {
        id: uuid.v4(),
        task: 'tarea 1'
      },
      {
        id: uuid.v4(),
        task: 'tarea 2'
      }];

      this.bindActions(NoteActions);
  }

  create(note){
    this.setState({
         notes: this.notes.concat(note)
       });
  }

  update(updatedNote){
    this.setState({
      notes: this.notes.map(note =>{
        if (note.id === updatedNote.id) {
          return Object.assign({}, note, updatedNote);
        }
        return note;
      })
    });
  }

  delete(id){
    this.setState({
      notes: this.notes.filter(note => note.id !== id)
    });
  }

}

export default NoteStore;
