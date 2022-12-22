import React from "react";

export default function Reloj(props){
    return(
        <p style={{color: "#035f73"}}>Hora: {props.date.toLocaleTimeString()} </p>
    );
}
