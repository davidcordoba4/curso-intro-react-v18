import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'
//Otra forma de usar estilos
// const estilos={
//     color: 'red',
//     backgroundColor: 'yellow',
// };
// function TodoCounter() {
//     return (
//         <h2 style={estilos}>Has completado 2 de 3 TODOs</h2>
//     );
// }
function TodoCounter() {
    const { total, completed } = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
    );
}

export { TodoCounter };