const reducer = (state,action)=>{
    // console.log(state,action.payload);
    switch(action.type){
        case('ADD_TRANSACTION'):
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        };
        case('DELETE_TRANSACTION'):
        return {...state,transactions:state.transactions.filter((transaction)=>transaction.id !== action.payload)}
    default:
        return state;
};
}
export default reducer;