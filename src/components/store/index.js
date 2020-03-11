import {createStore, combineReducers} from 'redux';
import reducer from './../textInput/reducer';

//CombineReducers es para registrar todos los reducers de la aplicacion al store
const reducers = combineReducers({
    reducer
});

//createStore crea el store globlal con el arbol de datos
export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());