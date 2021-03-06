import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import ResetAllVotesButton from './components/ResetAllVotesButton'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteList />
      <ResetAllVotesButton />
      <AnecdoteForm />
    </div>
  )
}

export default App