import config from 'config'

// action - state management
import * as actionTypes from '../actions'
import { isBrowser } from 'utils/lib'

const getLocalStorage = () => {
    if (isBrowser) {
        let isDarkMode = localStorage.getItem('isDarkMode')
        return isDarkMode
    }
}
export const initialState = {
    isOpen: [], // for active default menu
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true,
    isHorizontal: isBrowser ? (localStorage.getItem('isHorizontal') === 'true' ? true : false) : false,
    isDarkMode: isBrowser && localStorage.getItem('isDarkMode') === 'true' ? true : false
}

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state = initialState, action) => {
    let id
    switch (action.type) {
        case actionTypes.MENU_OPEN:
            id = action.id
            return {
                ...state,
                isOpen: [id]
            }
        case actionTypes.SET_MENU:
            return {
                ...state,
                opened: action.opened
            }
        case actionTypes.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.fontFamily
            }
        case actionTypes.SET_BORDER_RADIUS:
            return {
                ...state,
                borderRadius: action.borderRadius
            }
        case actionTypes.SET_LAYOUT:
            return {
                ...state,
                isHorizontal: action.isHorizontal
            }
        case actionTypes.SET_DARKMODE:
            return {
                ...state,
                isDarkMode: action.isDarkMode
            }
        default:
            return state
    }
}

export default customizationReducer
