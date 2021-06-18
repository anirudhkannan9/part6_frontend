import anecdoteService from '../services/anecdotes'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

//export const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      let id = action.data.id
      const anecdoteToVote = state.find(a => a.id === id)
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
      console.log('in anecdoteReducer/VOTE, votedAnecdote after calling service and AFTER incrementing votedAnecdote: ', votedAnecdote)

      return state.slice().map(a => a.id !== id ? a : votedAnecdote)
    case 'RESET_SINGLE_VOTES':
      const idOfAnecdoteToReset = action.data.id
      const anecdoteToReset = state.find(a => a.id === idOfAnecdoteToReset)
      const resettedAnecdote = {
        ...anecdoteToReset,
        votes: 0
      }
      return state.slice().map(a => a.id !== idOfAnecdoteToReset ? a : resettedAnecdote)

    case 'RESET_ALL_VOTES':
      return state.slice().map(a => {
        return { ...a, votes: 0 }
      })
    default: console.log('action', action)
  }

  return state
}


//action-creator functions: 
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}
export const createAnecdoteAction = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createAnecdoteService(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteForAnecdoteAction = anecdote => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.voteForAnecdoteService(anecdote)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote
    })
  }
}

export const resetAnecdoteVotesAction = anecdote => {
  return async dispatch => {
    const resettedAnecdote = await anecdoteService.resetAnecdoteVotesService(anecdote)
    dispatch({
      type: 'RESET_SINGLE_VOTES',
      data: resettedAnecdote 
    })
  }
}

export const resetAllAnecdoteVotesAction = () => {
  return {
    type: 'RESET_ALL_VOTES',
    data: null
  }
}

export default anecdoteReducer