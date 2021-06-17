const filterAtStart = ""

export const setFilter = filter => {
    return {
        type: 'SET_FILTER',
        data: { filter }
    }
}

const filterReducer = (state = filterAtStart, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.data
        case 'CLEAR_FILTER':
            return state
        default: return state

    }
}

export default filterReducer





