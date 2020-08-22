import{
   COMENZAR_DESCARGA_MPIO       ,
DESCARGA_MPIO_EXITO          ,
COMENZAR_DESCARGA_MPIO_ERROR
}
from '../types';
import ClienteAxios from '../config/axios';


// GET HACIA LA bASE DE DATOS

export function obtenerMunicipiosAction(){
    return async (dispatch)=>{ 
        dispatch(descarga());

       try{
           const respuesta = await ClienteAxios.get('api/municipios');
           console.log(respuesta);
           dispatch(descargaExitosa(respuesta.data));

       }catch(error){
               dispatch(descargaError());
       }



    }
}

const descarga = ()=> ({
    type: COMENZAR_DESCARGA_MPIO,
    payload: true
});

const descargaExitosa = mpio =>({
    type: DESCARGA_MPIO_EXITO,
    payload: mpio
});

const descargaError =() =>({
    type: COMENZAR_DESCARGA_MPIO_ERROR,
    payload: true
});
