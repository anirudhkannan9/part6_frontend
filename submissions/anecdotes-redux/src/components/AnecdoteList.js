import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { createNotif } from '../reducers/notifReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = anecdote => {
        dispatch(voteForAnecdote(anecdote.id))
        dispatch(createNotif(`you voted for: "${anecdote.content}"`))
        setTimeout(() => {
            dispatch(createNotif(''))
        }, 5000)
    }

    return (
        <>
            {anecdotes.map(anecdote => 
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
                )}
        </>
    )
}

export default AnecdoteList