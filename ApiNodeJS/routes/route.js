const express =  require('express');
const controller = require('../controller/controller')

const router = express.Router();
router.get('/api/fiscalias', controller.getAllFiscalias);
router.get('/api/procedimiento', controller.getProcedimiento);
router.get('/api/departamentos', controller.getAllDepartamentos);
router.get('/api/municipios', controller.getAllMunicipios);
router.get('/api/tipos', controller.getAllTipos);
router.post('/api/fiscalias' , controller.addNewFiscalia);
router.put('/api/fiscalias',controller.updateFiscalia);
router.delete('/api/fiscalias' , controller.deleteFiscalia);

module.exports = router;