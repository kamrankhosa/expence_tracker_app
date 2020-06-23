import React, { createContext, useReducer } from "react";
import transReducer from './transReducer';

const initialTransactionsValues = [
   

]

export const transContext = createContext(initialTransactionsValues);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(transReducer, initialTransactionsValues);

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
    }

    return(
        <transContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </transContext.Provider>
    )
}