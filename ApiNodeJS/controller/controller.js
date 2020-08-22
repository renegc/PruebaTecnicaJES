const { sql,poolPromise } = require('../database/db')
const fs = require('fs');
var rawdata = fs.readFileSync('./query/queries.json');
var queries = JSON.parse(rawdata);

class MainController {

    async getAllFiscalias(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getAllFiscalias)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async getAllMunicipios(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getAllMunicipios)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async getAllDepartamentos(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getAllDepartamentos)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async getAllTipos(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .query(queries.getAllTipos)
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }


    async getProcedimiento(req , res){
      try {
        const pool = await poolPromise
          const result = await pool.request()
          .execute('dbo.SP_allFiscalias')
          res.json(result.recordset)
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async addNewFiscalia(req , res){
      try {
        if(req.body.Fiscalia_Direccion != null && req.body.Fiscalia_Telefono != null && req.body.Fiscalia_Nombre != null && req.body.Id_Departamento != null && req.body.Id_Mpio != null && req.body.Id_Tipo != null) {
          const pool = await poolPromise
          const result = await pool.request()
          .input('Fiscalia_Direccion',sql.VarChar , req.body.Fiscalia_Direccion)
          .input('Fiscalia_Telefono',sql.VarChar , req.body.Fiscalia_Telefono)
          .input('Fiscalia_Nombre',sql.VarChar,req.body.Fiscalia_Nombre) 
          .input('Id_Departamento',sql.VarChar,req.body.Id_Departamento)
          .input('Id_Tipo',sql.VarChar,req.body.Id_Tipo)
          .input('Id_Mpio',sql.VarChar,req.body.Id_Mpio)
          .query(queries.addNewFiscalia)
          console.log(result)
          res.json(result)
        } else {
          res.send('Complete los campos!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    }
    async updateFiscalia(req , res){
      try {
        if(req.body.Fiscalia_Direccion != null && req.body.Fiscalia_Telefono != null && req.body.Fiscalia_Nombre != null && req.body.Id_Departamento != null && req.body.Id_Mpio != null && req.body.Id_Tipo != null && req.body.Fiscalia_ID) {
          const pool = await poolPromise
          const result = await pool.request()
          .input('Fiscalia_Direccion',sql.VarChar , req.body.Fiscalia_Direccion)
          .input('Fiscalia_Telefono',sql.VarChar , req.body.Fiscalia_Telefono)
          .input('Fiscalia_Nombre',sql.VarChar,req.body.Fiscalia_Nombre)
          .input('Id_Departamento',sql.VarChar,req.body.Id_Departamento)
          .input('Id_Tipo',sql.VarChar,req.body.Id_Tipo)
          .input('Id_Mpio',sql.VarChar,req.body.Id_Mpio)
          .input('Fiscalia_ID',sql.VarChar,req.body.Fiscalia_ID)
          .query(queries.updateFiscalia)
          res.json(result)
        } else {
          res.send('Falta algo mas!')
        }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
    async deleteFiscalia(req , res){
      try {
        console.log("algo")
        if(req.body.Fiscalia_ID != null ) {
          const pool = await poolPromise
            const result = await pool.request()
            .input('Fiscalia_ID',sql.VarChar,req.body.Fiscalia_ID)
            .query(queries.deleteFiscalia)
            console.log(result)
            res.json(result)
          } else {
            res.send('Revise los datos!')
          }
      } catch (error) {
        res.status(500)
        res.send(error.message)
      }
    }
}

const controller = new MainController()
module.exports = controller;