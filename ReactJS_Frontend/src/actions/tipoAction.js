import{
    COMENZAR_DESCARGA_TIPO      ,
DESCARGA_TIPO_EXITO         ,
COMENZAR_DESCARGA_TIPO_ERROR
 }
 from '../types';
 import ClienteAxios from '../config/axios';
 
 
 // GET HACIA LA bASE DE DATOS
 
 export function obtenerTipoAction(){
     return async (dispatch)=>{ 
         dispatch(descarga());
 
        try{
            const respuesta = await ClienteAxios.get('api/tipos');
            console.log(respuesta);
            dispatch(descargaExitosa(respuesta.data));
 
        }catch(error){
                dispatch(descargaError());
        }
 
 
 
     }
 }
 
 const descarga = ()=> ({
     type: COMENZAR_DESCARGA_TIPO,
     payload: true
 });
 
 const descargaExitosa = mpio =>({
     type: DESCARGA_TIPO_EXITO,
     payload: mpio
 });
 
 const descargaError =() =>({
     type: COMENZAR_DESCARGA_TIPO_ERROR,
     payload: true
 });
 