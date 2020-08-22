import React, {Fragment, useEffect} from 'react';
import Fiscalia from './Fiscalia';

//redux
import { useSelector,useDispatch } from 'react-redux';
import {obtenerFiscaliasAction} from '../actions/fiscaliaAction';


const Fiscalias = () => {

    const dispatch = useDispatch();

    useEffect(() => {

            //consultar la api
            const cargarFiscalias = () => dispatch(obtenerFiscaliasAction());
            cargarFiscalias();
            //eslint-disable-next-line
    }, []);

    //obtener el state
    const fiscalias = useSelector(state =>state.fiscalias.fiscalias);   
    const error = useSelector(state => state.fiscalias.error);
    const cargando = useSelector(state => state.fiscalias.loading);



    return (  
        <Fragment>
            <h2 className="text-center my-5">Listado de Fiscalias</h2>

            {error? <p className="font-weight-bold alert alert-danger text-center mt-4"> Hubo un error</p>: null}
            {cargando? <p className="text-center"> cargando... </p>: null}


            <table className="table table-striped">
                <thead className="table-dark" style={{'backgroundColor': "#080D11"}}>
                    <tr>
                        <th scope="col">Nombre </th>
                        <th scope="col">Direccion </th>
                        <th scope="col">Telefono </th>
                        <th scope="col">Tipo </th>
                        <th scope="col">Departamento </th>
                        <th scope="col">Municipio </th>
                        <th scope="col">Acciones </th>
                    </tr>

                </thead>
                <tbody>
                    { fiscalias.lenght ===0 ? 'No hay productos' : (
                        fiscalias.map(fiscalia =>(
                            <Fiscalia
                            key={fiscalia.Fiscalia_ID}
                            fiscalia={fiscalia}
                            />
                        ))
                    )}                  
                </tbody>

            </table>
        </Fragment>
        
    );
}
 
export default Fiscalias;