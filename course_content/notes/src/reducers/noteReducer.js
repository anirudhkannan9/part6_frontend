import noteService from '../services/notes'

// const generateId = () => Number((Math.random() * 1000000).toFixed(0))

// const initialState = [
//   {
//     content: 'reducer defines how redux store works',
//     important: true,
//     id: 1,
//   },
//   {
//     content: 'state of store can contain any data',
//     important: false,
//     id: 2,
//   },
// ]

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.data]
    case 'INIT_NOTES':
      return action.data
    case 'TOGGLE_IMPORTANCE': {
      const id = action.data.id
      const noteToChange = state.find(n => n.id === id)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      return state.map(note => note.id !== id ? note : changedNote)
    }
    default:
      return state
  }
}

//action creators
export const createNote = content => {
  return async dispatch => {
    const newNote = await noteService.createNew(content)
    dispatch({
      type: 'NEW_NOTE',
      data: newNote
    })
  }
}

export const toggleImportanceOf = note => {
  return async dispatch => {
    const toggledNote = await noteService.toggleImportanceService(note)
    dispatch({
      type: 'TOGGLE_IMPORTANCE',
      data: toggledNote 
    })
  }
}

//thunk: can make async action creators that wait for an operation to finish and then dispatch the real action
export const initializeNotes = () => {
  //inner async function - operation fetches all notes from server and then dispatches notes to the action (adds them to store)
  return async dispatch => {
    const notes = await noteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: notes
    })
  }
}

export default noteReducer