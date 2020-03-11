import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addText } from './actions';
import GetText from './getText';

//Componente para enviar informacion al store, recibe el action por props 
const TextInput = ({addText}) => {
    const textRef = useRef(null);
    return(
        <div>
        <input type="text" ref={textRef}></input>
            <button onClick = {()=> addText(textRef.current.value)}>Añadir texto al reducer</button>
            <GetText></GetText>
        </div>
    );
}
//connect recibe como segundo parametro el mapDispatchToProps que lo que hace es mandar el action al reducer para modificar el store
export default connect(null, {addText})(TextInput);