const initialNotif = ''

export const createNotif = message => {
    return {
        type: 'NEW_NOTIF',
        data: message
    }
}

const notifReducer = (state = initialNotif, action) => {
    switch (action.type) {
        case 'NEW_NOTIF':
            return action.data
        default: return state
    }
}

export default notifReducer