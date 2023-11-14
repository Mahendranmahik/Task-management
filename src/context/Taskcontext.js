import { createContext, useReducer } from "react";

export const Taskcontext=createContext()


const taskreducer=(state,action)=>{
    switch(action.type){
        case 'addtask':
           const id=Math.random()*1000
           let task ={...action.payload,id}
           return{...state,tasklist:[...state.tasklist,task]}

        case 'removetask':
            let list=state.tasklist.filter((task)=>task.id !== action.payload.id)
            return{...state,tasklist:[list]}

        case 'updatetask':
            let updatedlist=state.tasklist.map((task)=>task.id === action.payload.id
            ?action.payload:task)
            return{...state,tasklist:[...updatedlist]}

        case 'gettask':
            return state.tasklist
            
        case 'setselectedtask':
            return{...state,selectedtask:{...action.payload}}

        case 'getselectedtask':
            return state.selectedtask
        default:
            return state
    }
}

export const Taskcontextprovider=({children})=>{

    const [state,dispatch]=useReducer(taskreducer,
        // state
        {
            tasklist:[],
            selectedtask:{}
        })
        

    return(
        <Taskcontext.Provider value={{state,dispatch}}>
            {children}
        </Taskcontext.Provider>
    )
}