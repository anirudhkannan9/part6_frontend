import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotif } from '../reducers/notifReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = event => {
        event.preventDefault()
        dispatch(createAnecdote(event.target.anecdote.value))
        dispatch(createNotif(`you added the anecdote: "${event.target.anecdote.value}"`))
        event.target.anecdote.value = ''
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