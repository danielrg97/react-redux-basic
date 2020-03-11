//La accion que recibe el reducer para modificar el store, se importa por el componente y se pasa por el connect
export const addText = text =>{
    return {
        type: 'ADD_TEXT',
        payload: text
    }
}