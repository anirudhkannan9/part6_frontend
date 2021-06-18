import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initializeAnecdotes, voteForAnecdoteAction, resetAnecdoteVotesService, resetAnecdoteVotesAction } from '../reducers/anecdoteReducer'
import { setFilter } from '../reducers/filterReducer'
import { createNotif } from '../reducers/notifReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(initializeAnecdotes())
    }, [dispatch])

    const filter = useSelector(state => state.filter.filter)
    let anecdotes = useSelector(state => state.anecdotes.sort((a, b) => parseInt(b.votes) - parseInt(a.votes)))
    if (filter !== '' || filter !== "" || filter !== " ") {
        anecdotes = anecdotes.filter(a => a.content.toLowerCase().includes(filter))
    }
    //const notif = useSelector(state => state.notif)

    const vote = async anecdote => {
        dispatch(voteForAnecdoteAction(anecdote))
        dispatch(createNotif(`you voted for: "${anecdote.content}"`))
        setTimeout(() => {
            dispatch(createNotif(''))
        }, 5000)
    }

    // const resetVotes = async anecdote => {
    //     dispatch(resetAnecdoteVotesAction(anecdote))
    //     dispatch(initializeAnecdotes())
    // }

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
                        {/* <button onClick={() => resetVotes(anecdote)}>reset votes</button> */}
                    </div>
                </div>
                )}
        </>
    )
}

export default AnecdoteList