import{
    COMENZAR_DESCARGA_TIPO      ,
DESCARGA_TIPO_EXITO         ,
COMENZAR_DESCARGA_TIPO_ERROR
}
from '../types';


// cadareducer tiene su propio state

const  initialState ={
    tipo: [],
    error: null,
    loading: false
    
}

export default function(state =initialState, action){
    switch(action.type)    {
        case COMENZAR_DESCARGA_TIPO:
         return {
                ...state,
                loading: action.payload
            }       
        case COMENZAR_DESCARGA_TIPO_ERROR:        
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_TIPO_EXITO:
            return{
                ...state,
                tipo: action.payload ,            
                loading: false,
                error: null
            }        
            
        default:
            return state;
    }

}