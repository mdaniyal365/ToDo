import{Todo_Add,Remove_Todo} from './action.type'

export default (state,action)=>{
    switch (action.type) {
        case Todo_Add:
            return[...state,action.payload]
            
        case Remove_Todo:
                return state.filter(todo=>todo.id !==action.payload)
        default:
            return state
    }
}