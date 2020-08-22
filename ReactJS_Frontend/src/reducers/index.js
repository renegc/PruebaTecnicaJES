import {combineReducers} from 'redux';
import fiscaliasReducer from './fiscaliasReducer';
import alertaReducer from './alertaReducer';
import deptoReducer from './deptoReducer';
import mpioReducer from './mpioReducer';
import tipoReducer from './tipoReducer'

export default combineReducers({
    fiscalias: fiscaliasReducer,
    alerta: alertaReducer,
    depto: deptoReducer,
    mpio: mpioReducer,
tipo: tipoReducer
});