const initState: initStateType = {
    themeId: 1,
}

export type initStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: changeThemeIdType): initStateType => {
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdType => ({type: 'SET_THEME_ID', id})

type changeThemeIdType = {
    type: 'SET_THEME_ID'
    id: number
}