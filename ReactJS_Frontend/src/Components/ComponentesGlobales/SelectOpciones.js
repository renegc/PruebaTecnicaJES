import React, { Fragment } from 'react'
import { ListOfOptions } from '../ComponentesGlobales/ListOfOptions'

export const SelectOptions = ({ title, options }) => {
  var opt = options
  
  return (
    <Fragment>
      <ListOfOptions ops={opt}></ListOfOptions>
    </Fragment>
  )
}
export default SelectOptions;