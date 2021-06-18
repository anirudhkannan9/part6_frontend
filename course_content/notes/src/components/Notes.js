import React from 'react'
import { connect } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'

const Note = ({ note, handleClick }) => {
  return(
    <li onClick={handleClick}>
      {note.content} 
      <strong> {note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = (props) => {
  return(
    <ul>
      {props.notes.map(note =>
        <Note
          key={note.id}
          note={note}
          handleClick={() => props.toggleImportanceOf(note)}
        />
      )}
    </ul>
  )
}

const mapStateToProps = (state) => {
  if ( state.filter === 'ALL' ) {
    return {
      notes: state.notes
    }
  }
  return {
    notes: (state.filter === 'IMPORTANT'
      ? state.notes.filter(note => note.important)
      : state.notes.filter(note => !note.important)
    )
  }
}

//group of action creator functions passed to the connected component as props.
const mapDispatchToProps = {
  toggleImportanceOf,
}


const ConnectedNotes = connect(
  mapStateToProps,
  //no need to call the dispatch function separately since connect has already modified the toggleImportanceOf action creator into a form that contains the dispatch.
  mapDispatchToProps
)(Notes)

export default ConnectedNotes