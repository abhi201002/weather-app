let m = new Map([]);
export const initialState= {
    favorite: [],
    user: null,
    m : m,
} 

export const reducer = (state,action) => {
    switch (action.type) {
        case "SET_CITY":
            return{
                ...state,
                favorite: [...state.favorite,action.city],
                m : [...state.m,action.m]
            }
        case "REMOVE_CITY":
            return{
                ...state,
                favorite: state.favorite.filter((e) => {
                    return e.id != action.id
                })
            }
        case "SET_FAVO":
            return{
                ...state,
                m : [...state.m,action.m]
            }
        case "REMOVE_FAVO":

        default:
            return {state}
    }
}