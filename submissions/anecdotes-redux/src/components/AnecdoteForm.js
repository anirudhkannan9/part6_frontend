import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdoteAction } from '../reducers/anecdoteReducer'
import { createNotif } from '../reducers/notifReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createNotif(`you added the anecdote: "${content}"`))
        const newAnecdote = await anecdoteService.createAnecdoteService(content)
        dispatch(createAnecdoteAction(newAnecdote))
        setTimeout(() => {
            dispatch(createNotif(''))
        }, 5000)

      }
    
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name='anecdote'/>
                </div>
                <button type='submit'>create</button>

            </form>
        </div>
    )
}

export default AnecdoteForm