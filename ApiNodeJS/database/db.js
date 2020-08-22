const sql = require('mssql/msnodesqlv8')
const mongoose = require('mongoose');

const config = {
  user: "sa",  
    password: "mia",  
  database: 'Db_Fiscalias',
  server: "DESKTOP-VIU12QI",  
 driver: 'msnodesqlv8',
} 

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Error en Conexion a la Base de Datos: ', err))

module.exports = {
  sql, poolPromise
}

