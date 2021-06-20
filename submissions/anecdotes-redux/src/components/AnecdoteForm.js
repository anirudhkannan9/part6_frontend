import React from 'react'
import { useDispatch, connect } from 'react-redux'
import { createAnecdoteAction } from '../reducers/anecdoteReducer'
import { createNotif } from '../reducers/notifReducer'

const AnecdoteForm = (props) => {
    //const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createNotif(`you added the anecdote: "${content}"`, 5)
        props.createAnecdoteAction(content)
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

const mapDispatchToProps = {
    createAnecdoteAction,
    createNotif
}

export default connect(
    null,
    mapDispatchToProps
)(AnecdoteForm)

//export default AnecdoteForm