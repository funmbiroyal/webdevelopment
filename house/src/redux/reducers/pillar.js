const initialState = {
    pillar : 4
}

export const pillarReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'UPDATE_PILLARS':
            return {...state,pillar: action.payload}
            default:
                return state
    }
}