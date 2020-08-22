import React from "react";
import { Fragment } from "react";

export const ListOfOptions = ops => {
 
  var ops1 = ops.ops;

  
  

  return (
    <Fragment>
      {ops1.map(data => (
        <option key={data.Id_Departamento || data.Id_Mpio|| data.Id_Tipo} value={data.Id_Departamento || data.Id_Mpio || data.Id_Tipo}>
          {data.Mpio_Nombre||data.Dp_Nombre||data.Tipo_Nombre}
        </option>
      ))}
    </Fragment>
  );
};