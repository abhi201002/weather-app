export const initialState= {
    favorite: [],
    m : new Map(),
} 

export const reducer = (state,action) => {
    switch (action.type) {
        case "SET_CITY":
            return{
                ...state,
                favorite: [...state.favorite,action.city],
                m : state.m.set(action.city.name,1)
            }
        case "REMOVE_CITY":
            return{
                ...state,
                favorite: state.favorite.filter((e) => {
                    return e.id !== action.city.id
                }),
            }
        default:
            return {state}
    }
}