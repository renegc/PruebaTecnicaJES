import {
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
  COMENZAR_EDICION_FISCALIA,
  FISCALIA_EDITADO_EXITO,
  FISCALIA_EDITADO_ERROR,
} from "../types";
import ClienteAxios from "../config/axios";
import Swal from "sweetalert2";
// crear nueva fiscalia

export function crearNuevaFiscaliaAction(fiscalia) {
  return async (dispatch) => {
    dispatch(agregarFiscalia());

    try {
      await ClienteAxios.post("api/fiscalias", fiscalia);
      dispatch(agregarFiscaliaExito(fiscalia));

      Swal.fire("Correcto", "La fiscalia se Inserto correctamente", "success");
    } catch (error) {
      dispatch(agregarFiscaliaError(true));
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
    }

    // console.log(fiscalia)
  };
}

const agregarFiscalia = () => ({
  type: AGREGAR_FISCALIA,
  payload: true,
});

//si la fiscalia se gurada correectamente
const agregarFiscaliaExito = (fiscalia) => ({
  type: AGREGAR_FISCALIA_EXITO,
  payload: fiscalia,
});

//si hay error
const agregarFiscaliaError = (estado) => ({
  type: AGREGAR_FISCALIA_ERROR,
  payload: estado,
});

// GET HACIA LA bASE DE DATOS

export function obtenerFiscaliasAction() {
  return async (dispatch) => {
    dispatch(descargarFiscalias());

    try {
      const respuesta = await ClienteAxios.get("api/procedimiento");
      console.log(respuesta);
      dispatch(descargaFiscaliaExitosa(respuesta.data));
    } catch (error) {
      dispatch(descargaFiscaliasError());
    }
  };
}

const descargarFiscalias = () => ({
  type: COMENZAR_DESCARGA_FISCALIAS,
  payload: true,
});

const descargaFiscaliaExitosa = (fiscalias) => ({
  type: DESCARGA_FISCALIAS_EXITO,
  payload: fiscalias,
});

const descargaFiscaliasError = () => ({
  type: COMENZAR_DESCARGA_FISCALIAS_ERROR,
  payload: true,
});

// ACCIONES PARA ELIMINAR
export function borrarFiscaliaAction(id) {
  return async (dispatch) => {
    dispatch(obtenerFiscaliaeliminar(id));
    var objeto = { Fiscalia_ID: id };
    console.log(objeto, id);
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("Fiscalia_ID", id);

      var requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      fetch("http://localhost:3000/api/fiscalias", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      dispatch(eliminarFiscaliaExito());

      Swal.fire("Eliminado", "Tu Fiscalia ha sido Elimnada", "success");
    } catch (error) {
      console.log(error);
      dispatch(eliminarFiscaliaError());
    }

    
  };
}

const obtenerFiscaliaeliminar = (id) => ({
  type: OBTENER_FISCALIA_ELIMINAR,
  payload: id,
});

const eliminarFiscaliaExito = () => ({
  type: FISCALIA_ELIMINADO_EXITO,
});

const eliminarFiscaliaError = () => ({
  type: FISCALIA_ELIMINADO_ERROR,
  payload: true,
});

//COLOCAR FISCALIA EN EDICION
export function obtenerFiscaliaEditar(fiscalia) {
  return (dispatch) => {
    dispatch(obtenerEdiFiscaliaAction(fiscalia));
  };
}

const obtenerEdiFiscaliaAction = (fiscalia) => ({
  type: OBTENER_FISCALIA_EDITAR,
  payload: fiscalia,
});

//EDITAR REGISTRO EN LA BD Y EL STATE
export function editarFiscaliaAction(fiscalia) {
  return async (dispatch) => {
    dispatch(editarFiscalia());

    try {
      await ClienteAxios.put(`api/fiscalias`, fiscalia);

      dispatch(editarFiscaliaExitoso(fiscalia));
    } catch (error) {
      dispatch(editarFiscaliaError());
    }
  };
}

const editarFiscalia = () => ({
  type: COMENZAR_EDICION_FISCALIA,
});

const editarFiscaliaExitoso = (fiscalia) => ({
  type: FISCALIA_EDITADO_EXITO,
  payload: fiscalia,
});

const editarFiscaliaError = () => ({
  type: FISCALIA_EDITADO_ERROR,
  payload: true,
});
