import React from 'react';
import { connect } from 'react-redux';
//Componente para recibir la informacion del store, recibe por medio de props, tiene destructuring para evitar state.text
const GetText = ({text}) => {
    return(
        <h1>{text}</h1>
    );
}

//primer parametro del connect, obtiene el dato del reducer registrado en el store, indico cual es el reducer que quiero obtener y el action donde modifica el estado
 const mapStateToProps = ({reducer}) =>{
     return {
         text : reducer.text
     }
 }

//connect pasa por props los datos que le indico por el mapStateToProps, y suscribo el componente a redux
export default connect(mapStateToProps)(GetText);