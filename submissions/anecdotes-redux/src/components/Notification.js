import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notif = useSelector(state => state.notif)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (notif === '') {
    return null
  } else {
    return (
      <div style={style}>
        {notif}
      </div>
    )
  }
}

export default Notification