import{
    COMENZAR_DESCARGA_DEPARTAMENTOS      ,
DESCARGA_DEPARTAMENTOS_EXITO         ,
COMENZAR_DESCARGA_DEPARTAMENTOS_ERROR
}
from '../types';


// cadareducer tiene su propio state

const  initialState ={
    depto: [],
    error: null,
    loading: false
    
}

export default function(state =initialState, action){
    switch(action.type)    {
        case COMENZAR_DESCARGA_DEPARTAMENTOS:
         return {
                ...state,
                loading: action.payload
            }       
        case COMENZAR_DESCARGA_DEPARTAMENTOS_ERROR:        
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_DEPARTAMENTOS_EXITO:
            return{
                ...state,
                depto: action.payload ,            
                loading: false,
                error: null
            }        
            
        default:
            return state;
    }

}