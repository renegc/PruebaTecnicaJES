import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectOptions from "../Components/ComponentesGlobales/SelectOpciones";
import CampoEntrada from "../Components/ComponentesGlobales/CampoEntrada";
import { Form } from "react-bootstrap";
import ClienteAxios from '../config/axios';
//acciones de redux
import { crearNuevaFiscaliaAction } from "../actions/fiscaliaAction";
import { mostrarAlerta, ocultarAlertaAction } from "../actions/alertaAction";
import { obtenerTipoAction } from "../actions/tipoAction";


const NuevaFiscalia = ({ history }) => {
  //state  del componenete
  const [Fiscalia_ID, guardarId] = useState("0");
  const [Fiscalia_Nombre, guardarNombre] = useState("");
  const [Fiscalia_Direccion, guardarDireccion] = useState("");
  const [Fiscalia_Telefono, guardarTelefono] = useState("");
  const [Id_Departamento, guardarDepartamento] = useState("");
  const [Id_Tipo, guardarTipo] = useState("");
  const [Id_Mpio, guardarMuni] = useState("");
  const [Deptos, setDeptos] = useState([]);
  const [Mpios, setMpios] = useState([]);
  



  const tipo = useSelector((state) => state.tipo.tipo);


  useEffect(() => {
    //consultar la api 
    const getDeptos = async () => {
      /* obtenemos los roles locales*/      
      const respuesta = await ClienteAxios.get('api/departamentos');
    console.log(respuesta.data);
    const datar = respuesta.data;
    setDeptos(datar);
    };
    getDeptos();

    const getMpios = async () => {
        /* obtenemos los roles locales*/      
        const respuesta = await ClienteAxios.get('api/municipios');
      console.log(respuesta.data);
      const datar = respuesta.data;
      setMpios(datar);
      };
      getMpios();
    
    /* const cargarDeptos = () => dispatch(obtenerDepartamentosAction());
    cargarDeptos();

    const cargarMpios = () => dispatch(obtenerMunicipiosAction());
    cargarMpios(); */



    const cargarTipos = () => dispatch(obtenerTipoAction());
    cargarTipos();
    

    
   

    //eslint-disable-next-line
  }, []);

  //aqui vael dispatch
  const dispatch = useDispatch();

  //acceder al state del store jeje
  const cargando = useSelector((state) => state.fiscalias.loading);
  const alerta = useSelector((state) => state.alerta.alerta);

  //llama el action de  fiscaliaAction
  const agregarFiscalia = (fiscalia) =>
    dispatch(crearNuevaFiscaliaAction(fiscalia));

  //cuando se hace submit
  const submitNuevaFiscalia = (e) => {
    e.preventDefault();

    // validar form
     if(Fiscalia_Nombre.trim() ==='' || Fiscalia_Direccion.trim()===''|| Fiscalia_Telefono.trim()===''||Id_Departamento.trim()==='' || Id_Tipo.trim()==='' || Id_Mpio.trim()===''){
            const alerta = {
                msg: 'Campos obligatorio',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
           dispatch( mostrarAlerta(alerta));
            return;
        }

        //hay o no hay errores
        dispatch(ocultarAlertaAction());
    //crear nueva fiscalia
     agregarFiscalia({
            Fiscalia_ID,
            Fiscalia_Nombre,
            Fiscalia_Direccion,
            Fiscalia_Telefono,
            Id_Departamento,
            Id_Mpio,
            Id_Tipo          
        });

  

    //redirecciono

    history.push('/');
    window.location.reload();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nueva Fiscalia
            </h2>

            {alerta ? <p className={alerta.classes}> {alerta.msg} </p> : null}

            <Form onSubmit={submitNuevaFiscalia}>
              <input
                type="hidden"
                className="form-control"
                value={Fiscalia_ID}
                onChange={guardarId}
              />
              <div className="form-group">
                <CampoEntrada
                  label="Nombre Fiscalia"
                  controlId="nombrefis"
                  name="Fiscalia_Nombre"
                  onChange={(e) => guardarNombre(e.target.value)}
                  value={Fiscalia_Nombre}
                  placeholder="Nombre Fiscalia"
                />
              </div>

              <div className="form-group">
                <label>Direccion</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Direccion"
                  name="Fiscalia_Direccion"
                  value={Fiscalia_Direccion}
                  onChange={(e) => guardarDireccion(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Telefono</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telefono"
                  name="fiscalia_Telefono"
                  value={Fiscalia_Telefono}
                  onChange={(e) => guardarTelefono(e.target.value)}
                />
              </div>
              <div className="form-group">
                <Form.Group controlId="dp_Depto">
                  <Form.Label>Departamento</Form.Label>
                  <Form.Control
                    as="select"
                    name="Id_Departamento"
                    onChange={(e) => guardarDepartamento(e.target.value)}
                    value={Id_Departamento}
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
                    onChange={(e) => guardarMuni(e.target.value)}
                    value={Id_Mpio}
                  >
                    <option>Seleccionar</option>
                    {Id_Departamento !== undefined ? (
                  Mpios ? (
                    Id_Departamento ? (
                      <SelectOptions
                         options={Mpios.filter(
                          (cats) => cats.Depto.toString() === Id_Departamento.toString()
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
                    onChange={(e) => guardarTipo(e.target.value)}
                    value={Id_Tipo}
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
              >
                Agregar
              </button>
            </Form>
            {cargando ? <p>Cargando...</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevaFiscalia;
