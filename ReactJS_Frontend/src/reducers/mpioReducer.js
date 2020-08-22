import{
    COMENZAR_DESCARGA_MPIO       ,
    DESCARGA_MPIO_EXITO          ,
    COMENZAR_DESCARGA_MPIO_ERROR
}
from '../types';


// cadareducer tiene su propio state

const  initialState ={
    mpio: [],
    error: null,
    loading: false
    
}

export default function(state =initialState, action){
    switch(action.type)    {
        case COMENZAR_DESCARGA_MPIO:
         return {
                ...state,
                loading: action.payload
            }       
        case COMENZAR_DESCARGA_MPIO_ERROR:        
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_MPIO_EXITO:
            return{
                ...state,
                mpio: action.payload ,            
                loading: false,
                error: null
            }        
            
        default:
            return state;
    }

}