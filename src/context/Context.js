import { createContext,useReducer } from "react";
import reducer from "./Reducer";

const initialState = {
    transactions: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,initialState)
    const deleteTrans = (id)=>{
dispatch({
    type: 'DELETE_TRANSACTION',
    payload:id
}
)
    }
const addTrans = (transObj)=>{
    dispatch({
        type:'ADD_TRANSACTION',
        payload:{
            desc:transObj.desc,
            amount:transObj.amount,
            id:transObj.id
        }
    })
};
return(
    <GlobalContext.Provider value={{transactions:state.transactions,addTrans,deleteTrans}}>{children}</GlobalContext.Provider>
)

}