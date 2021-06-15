const initialNotif = "Just seeing if notifReducer works"

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
        default: return initialNotif
    }
}

export default notifReducer