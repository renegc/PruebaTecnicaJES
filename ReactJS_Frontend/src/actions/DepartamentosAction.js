import{
    COMENZAR_DESCARGA_DEPARTAMENTOS      ,
DESCARGA_DEPARTAMENTOS_EXITO         ,
COMENZAR_DESCARGA_DEPARTAMENTOS_ERROR
}
from '../types';
import ClienteAxios from '../config/axios';


// GET HACIA LA bASE DE DATOS

export function obtenerDepartamentosAction(){
    return async (dispatch)=>{ 
        dispatch(descargarDepartamentos());

       try{
           const respuesta = await ClienteAxios.get('api/departamentos');
           console.log(respuesta);
           dispatch(descargaDeptoExitosa(respuesta.data));

       }catch(error){
               dispatch(descargaDeptoError());
       }



    }
}

const descargarDepartamentos = ()=> ({
    type: COMENZAR_DESCARGA_DEPARTAMENTOS,
    payload: true
});

const descargaDeptoExitosa = depto =>({
    type: DESCARGA_DEPARTAMENTOS_EXITO,
    payload: depto
});

const descargaDeptoError =() =>({
    type: COMENZAR_DESCARGA_DEPARTAMENTOS_ERROR,
    payload: true
});
