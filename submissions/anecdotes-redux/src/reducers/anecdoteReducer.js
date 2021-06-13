const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

export const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const voteForAnecdote = id => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

//const initialState = anecdotesAtStart.map(asObject)

const initialState = [ 
  {
    content: 'anecdote with 2 votes',
    id: getId(),
    votes: 2
  },
  {
    content: 'anecodte with 3 votes',
    id: getId(),
    votes: 3
  },
  {
    content: 'anecdote with 1 vote',
    id: getId(),
    votes: 1
  }

]

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToVote = state.find(a => a.id === id)
      const votedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }
    
      return state.slice().map(a => a.id !== id ? a : votedAnecdote).sort((a, b) => parseInt(b.votes) - parseInt(a.votes))
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    default: console.log('action', action)
  }

  return state
}

export default reducer