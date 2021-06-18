const initialNotif = ''

//action creators
// export const createNotif = message => {
//     return {
//         type: 'NEW_NOTIF',
//         data: message
//     }
// }
export const createNotif = (message, seconds) => {
    return async dispatch => {
        dispatch({
            type: 'NEW_NOTIF',
            data: message
        })
        setTimeout(() => {
            dispatch({
                type: 'NEW_NOTIF',
                data: ''
            })
        }, seconds * 1000 )
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