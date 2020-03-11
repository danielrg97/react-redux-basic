//inicializa el state
const initialState = {
    text:""
}
//el reducer es el que modifica el store, el connect se encarga de pasar el action indicado en el componente en el segundo parametro
export default (state = initialState, action) => {
    switch(action.type){
        case('ADD_TEXT'):
            return {...state, text: action.payload}
        default:
            return state
    }
}