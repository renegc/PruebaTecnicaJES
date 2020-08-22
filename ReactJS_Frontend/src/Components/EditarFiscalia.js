import React, {useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {editarFiscaliaAction} from '../actions/fiscaliaAction';
import {useHistory} from 'react-router-dom';

import SelectOptions from "../Components/ComponentesGlobales/SelectOpciones";
import { Form } from "react-bootstrap";

import { obtenerTipoAction } from "../actions/tipoAction";
import ClienteAxios from '../config/axios';

const EditarFiscalia = (props) => {
        const history = useHistory();
        const dispatch = useDispatch();
        console.log(props.location.state)
        //props.location.state===undefined ?null  : props.contactos[0].IdPersona ||  null

        const [Deptos, setDeptos] = useState([]);
  const [Mpios, setMpios] = useState([]);

        //nuevo state
         const [fiscalia, guardarFiscalia] = useState({
             Fiscalia_ID: props.location.state===undefined ?null  : props.location.state.Fiscalia_ID||  null,
             Fiscalia_Nombre: '',
             Fiscalia_Direccion: '',
             Fiscalia_Telefono: '',
             Id_Departamento: props.location.state===undefined ?null  : props.location.state.Id_Departamento||  null,
             Id_Mpio: '',
             Id_Tipo: ''

         })

    const fiscaliae = useSelector(state => state.fiscalias.fiscaliaeditar);
    const tipo = useSelector((state) => state.tipo.tipo);
    /* 
    const {Id_Tipo,Id_Departamento,Id_Mpio,Fiscalia_Direccion,Fiscalia_Telefono,Fiscalia_Nombre} = fiscaliae;
   */
        
     useEffect(() => {
        guardarFiscalia(fiscaliae)

        const getDeptos = async () => {
            /* obtenemos los roles locales*/      
            const respuesta = await ClienteAxios.get('api/departamentos');
          
          const datar = respuesta.data;
          setDeptos(datar);
          };
          getDeptos();
      
          const getMpios = async () => {
              /* obtenemos los roles locales*/      
              const respuesta = await ClienteAxios.get('api/municipios');
      
            const datar = respuesta.data;
            setMpios(datar);
            };
            getMpios();

    const cargarTipos = () => dispatch(obtenerTipoAction());
    cargarTipos();
    //eslint-disable-next-line
     }, []);

     const onChangeFormulario = e =>{
         guardarFiscalia({
             ...fiscalia,
             [e.target.name] : e.target.value
         })
     }


     const submitEditarFiscalia = e =>{
         e.preventDefault();

         dispatch(editarFiscaliaAction(fiscalia));
         history.push('/');
         window.location.reload();
   }
    return (  
        <div className="row justify-content-center">
        <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Fiscalia
                        </h2>

                        <Form
                          onSubmit={submitEditarFiscalia}
                        >
                            <div className="form-group">
                                 <label>Fiscalia Nombre</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Fiscalia"
                                    name="Fiscalia_Nombre"
                                    value={fiscalia.Fiscalia_Nombre}
                                    onChange={onChangeFormulario}
                                 />
                            </div>

                            <div className="form-group">
                                 <label>Direccion</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Direccion"
                                    name="Fiscalia_Direccion"
                                    defaultValue={fiscalia.Fiscalia_Direccion}

                                    onChange={onChangeFormulario}

                                 />
                            </div>

                            <div className="form-group">
                                 <label>Telefono</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Telefono"
                                    name="Fiscalia_Telefono"
                                    defaultValue={fiscalia.Fiscalia_Telefono}

                                   onChange={onChangeFormulario}

                                    

                                 />
                            </div>


                            <div className="form-group">
                <Form.Group controlId="dp_Depto">
                  <Form.Label>Departamento</Form.Label>
                  <Form.Control
                    as="select"
                    name="Id_Departamento"
                    onChange={onChangeFormulario}
                    value={fiscalia.Id_Departamento}
                  >
                    <option>Seleccionar</option>
                    {Deptos ? (
                      <SelectOptions options={Deptos}></SelectOptions>
                    ) : (
                      <option>cargando</option>
                    )}
                  </Form.Control>
                </Form.Group>
              </div>

              <div className="form-group">
                <Form.Group controlId="dp_Mpio">
                  <Form.Label>Municpio</Form.Label>
                  <Form.Control
                    as="select"
                    name="Id_Mpio"
                    onChange={onChangeFormulario}
                    value={fiscalia.Id_Mpio}
                  >
                    <option>Seleccionar</option>
                    {fiscalia.Id_Departamento !== undefined ? (
                  Mpios ? (
                    fiscalia.Id_Departamento ? (
                      <SelectOptions
                         options={Mpios.filter(
                          (cats) => cats.Depto.toString() === fiscalia.Id_Departamento.toString()
                        )}
                      ></SelectOptions>
                    ) : (
                      <option>Seleccione un municipio</option>
                    )
                  ) : (
                    <option>cargando</option>
                  )
                ) : (
                  <option>Sin data</option>
                )}
                  </Form.Control>
                </Form.Group>
              </div>

              <div className="form-group">
                <Form.Group controlId="dp_tipo">
                  <Form.Label>Tipo Fiscalia</Form.Label>
                  <Form.Control
                    as="select"
                    name="Id_Tipo"
                    onChange={onChangeFormulario}
                    value={fiscalia.Id_Tipo}
                  >
                    <option>Seleccionar</option>
                    {tipo ? (
                      <SelectOptions options={tipo}></SelectOptions>
                    ) : (
                      <option>cargando</option>
                    )}
                  </Form.Control>
                </Form.Group>
              </div>

                           

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase
                                d-block w-100"
                                >Guardar Cambios                                 
                            </button>


                        </Form>
                    </div>
                </div>                 
        </div>
   </div>



    );
}
 
export default EditarFiscalia;