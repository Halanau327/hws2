import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = [...state]
            if(action.payload === 'up') {
                return newState.sort((a,b) => a.name.localeCompare(b.name))
            } else if (action.payload === 'down') {
                return newState.sort((a,b) => b.name.localeCompare(a.name))
            }
            return newState
        }
        case 'check': {
            return state.filter(i => i.age >= 18? i : null)
        }
        default:
            return state
    }
}
