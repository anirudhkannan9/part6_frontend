import React from 'react'
import { useDispatch } from 'react-redux'
import { resetAllAnecdoteVotesAction } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'

const ResetAllVotesButton = () => {
    const dispatch = useDispatch()

    const reset = () => {
        console.log('resetting all votes')
        anecdoteService.resetAllVotesService()
        dispatch(resetAllAnecdoteVotesAction())
        //dispatch(resetAllAnecdotesAction())
    }

    return (
        <>
         <button onClick={reset}>reset all votes</button>
        </>
    )
}

export default ResetAllVotesButton