import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (props.notif === '') {
    return null
  } else {
    return (
      <div style={style}>
        {props.notif}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notif: state.notif
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification