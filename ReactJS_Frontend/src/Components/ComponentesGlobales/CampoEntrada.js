import React from "react";
import Form from "react-bootstrap/Form";

const CampoEntrada = props => {

  return (
    <Form.Group controlId={props.controlId}>
      <Form.Label hidden={props.hidden}>{props.label}</Form.Label>
      <Form.Control
        //id={props.idForm?props.idForm:props.name}
        required={props.hasOwnProperty("required")?props.required:false}
        hidden={props.hidden}
        name={props.name}
        onChange={props.onChange}
        value={props.hasOwnProperty("value") ? props.value : ''}
        disabled={props.hasOwnProperty("disabled")?props.disabled:false}
        type={props.hasOwnProperty("type")? props.type:"text"}
        placeholder={props.hasOwnProperty("placeholder")?props.placeholder:""}
      />
      <Form.Control.Feedback>{props.hasOwnProperty("msgValid")?props.msgValid:"Parece bien!"}</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">{props.hasOwnProperty("msgInvalid")?props.msgInvalid:"Formato no válido!"}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default CampoEntrada;