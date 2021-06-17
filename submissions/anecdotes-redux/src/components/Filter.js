import React, { useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()
    useEffect(() => dispatch(setFilter('')), [])

    const handleChange = (event) => dispatch(setFilter(event.target.value.toLowerCase().trim()))

    const style = { marginBottom: 10 }

    return (
        <div style={style}>
        filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter