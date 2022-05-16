export const initialState = {
    user: {},
    theme:'',
    state:false
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.item
            }
            case "SET_THEME":
            return {
                ...state,
                theme: action.item
            }
            case "SET_STATE":
            return {
                ...state,
                state: action.item
            }
        default:
            return state;
    }
};

export default reducer;
