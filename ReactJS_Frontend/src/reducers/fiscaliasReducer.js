import{
    AGREGAR_FISCALIA,
    AGREGAR_FISCALIA_EXITO,
    AGREGAR_FISCALIA_ERROR,
    COMENZAR_DESCARGA_FISCALIAS,
    DESCARGA_FISCALIAS_EXITO,
    COMENZAR_DESCARGA_FISCALIAS_ERROR,
    OBTENER_FISCALIA_ELIMINAR,
    FISCALIA_ELIMINADO_EXITO,
    FISCALIA_ELIMINADO_ERROR,
    OBTENER_FISCALIA_EDITAR,
    
    FISCALIA_EDITADO_EXITO,
    FISCALIA_EDITADO_ERROR
}
from '../types';


// cadareducer tiene su propio state

const  initialState ={
    fiscalias: [],
    error: null,
    loading: false,
    fiscaliaeliminar: null,
    fiscaliaeditar: null
}

export default function(state =initialState, action){
    switch(action.type)    {
        case COMENZAR_DESCARGA_FISCALIAS:
        case AGREGAR_FISCALIA:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_FISCALIA_EXITO:
            return {
                ...state,
                loading: false,
                fiscalias: [...state.fiscalias, action.payload]
            }
        case COMENZAR_DESCARGA_FISCALIAS_ERROR:
        case FISCALIA_EDITADO_ERROR:
        case FISCALIA_ELIMINADO_ERROR:
        case AGREGAR_FISCALIA_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_FISCALIAS_EXITO:
            return{
                ...state,
                fiscalias: action.payload ,            
                loading: false,
                error: null
            }
        case OBTENER_FISCALIA_ELIMINAR:
            return{
                ...state,
                fiscaliaeliminar: action.payload
            }
        case FISCALIA_ELIMINADO_EXITO:
            
            return{
                ...state,
                fiscalias: state.fiscalias.filter(fiscalia => fiscalia.Fiscalia_ID !==state.fiscaliaeliminar),
                fiscaliaeliminar: null
                
            }
        case OBTENER_FISCALIA_EDITAR:
            return{
                ...state,
                    fiscaliaeditar: action.payload
            }

        case FISCALIA_EDITADO_EXITO:
            return{
                ...state,
                fiscaliaeditar: null,
               
                 fiscalias: state.fiscalias.map(fiscalia => 
                         fiscalia.Fiscalia_ID === action.payload.id ? fiscalia= action.payload :
                         fiscalia
                     )
            }
            
        default:
            return state;
    }

}