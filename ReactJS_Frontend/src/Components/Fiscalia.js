import React from 'react';
import { useHistory} from 'react-router-dom';

//redux
import {useDispatch} from 'react-redux';

import {borrarFiscaliaAction, obtenerFiscaliaEditar} from '../actions/fiscaliaAction';
import Swal from 'sweetalert2';


const Fiscalia = ({fiscalia}) => {
    
    //const {fiscalia_ID,fiscalia_Tipo,fiscalia_Codigo,fiscalia_Direccion,fiscalia_Telefono,fiscalia_Nombre} = fiscalia;

    const dispatch = useDispatch();
    const history = useHistory();
   
    const confirmarEliminarFiscalia = id =>{
         //confirmar si desea eliminarlo
   Swal.fire({
        title: '¿Estas Seguro?',
        text : 'No podras revertir esto',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor:'#d33',
        confirmButtonText: 'Si, borralo',
        cancelButtonText: 'Cancelar'
        
    }).then((result) =>{
       
        if (result.value){
            
            dispatch(borrarFiscaliaAction(id));
        }
    });

                   
        //parsarlo al action
       

    }

    //funcion que redirige de forma programada
    const redireccionarEdicion = fiscalia =>{
        console.log(fiscalia)
        dispatch(obtenerFiscaliaEditar(fiscalia));
        history.push({
            pathname: `/fiscalias/editar/${fiscalia.Fiscalia_ID}`,
            state: {
                Fiscalia_ID: fiscalia.Fiscalia_ID,
                Fiscalia_Nombre: fiscalia.Fiscalia_Nombre,
                Fiscalia_Direccion: fiscalia.Fiscalia_Direccion,
                Fiscalia_Telefono: fiscalia.Fiscalia_Telefono,
                Id_Departamento: fiscalia.Id_Departamento,
                Id_Mpio: fiscalia.Id_Mpio,
                Id_Tipo: fiscalia.Id_Tipo
            },
          });
        
    }
   

    return (
        <tr>
            <td>{fiscalia.Fiscalia_Nombre}</td>
            <td>{fiscalia.Fiscalia_Direccion}</td>
            <td>{fiscalia.Fiscalia_Telefono}</td>
            <td>{fiscalia.Tipo_Nombre}</td>
            <td>{fiscalia.Dp_Nombre}</td>
            <td>{fiscalia.Mpio_Nombre}</td>
            <td>
            <button
            type="button"
            onClick={() => redireccionarEdicion(fiscalia)}
            className="btn btn-warning mr-2">
                    Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={()=> confirmarEliminarFiscalia(fiscalia.Fiscalia_ID)}
                >
                     Eliminar   
                </button>

            </td>
           

          
        </tr>

      );
}
 
export default Fiscalia;