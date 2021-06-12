import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'

const Note = ({ note, handleClick }) => {
    return (
        <li onClick={handleClick}>
            {note.content}
            <strong> { note.important ? 'important' : ''} </strong>
        </li>
    )
}

const Notes = () => {
    // useDispatch-hook provides React components access 2 dispatch-fn of the redux-store in index.js. 
    // allows all components to change state of the redux-store.
    const dispatch = useDispatch()
    //component accesses notes in the store w useSelector-hook of react-redux library.
    //need all notes, so selector function returns whole state    
    const notes = useSelector(state => state)

    return (
        <ul>
            {notes.map(note =>
                <Note
                    key={note.id}
                    note={note}
                    handleClick={() => dispatch(toggleImportanceOf(note.id))
                    }
                /> 
            )}
        </ul>
    )
}

export default Notes