import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createAnecdoteService = async (content) => {
    const anecdoteObject = { content, votes: 0 }
    const response = await axios.post(baseUrl, anecdoteObject)
    return response.data
}

const voteForAnecdoteService = async (anecdote) => {
    const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1}
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, votedAnecdote)
    return response.data
}

const resetAnecdoteVotesService = async (anecdote) => {
    const resettedAnecdote = {...anecdote, votes: 0}
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, resettedAnecdote)
    return response.data
}

const resetAllVotesService = async () => {
    const response = await getAll()
    response.map(a => resetAnecdoteVotesService(a))
}

const exportedObject = {
    getAll, 
    createAnecdoteService,
    voteForAnecdoteService,
    resetAnecdoteVotesService,
    resetAllVotesService
}

export default exportedObject