import React from 'react';

/*
TODO:
I. Crear calculadora estática
    1. Crear tabla (hardcorde) con CANTIDAD, ÍTEM y VALOR (c/u) con VALOR TOTAL al final ✓✓
    2. Agregar algunos productos con sus precios ✓✓
    3. Mostrar total ✓✓
    4. Crear función que genere tabla según cantidad de ítems en un array de mentira ✓✓
    5. Sumar cantidad de productos si se repiten <-- lo arreglamos al cerrar la historia 1
    6. Traspasar props desde Breakfast y Lunch ✓✓
    7. Diseñar sistema de estados
    8. Agregar botones en Breakfast y Lunch para agregar productos a pasar en 
    calculadora de cuenta
    9. Crear tabla dinámicamente con data real ✓✓
    10. Calcular cuenta con data real de Breakfast y Lunch ✓✓
    11. Agregar botón de eliminar
*/

const TableHeader = () => {
    return (
        <thead>
            <tr>
            <th>#</th> 
            <th>Ítem</th> 
            <th>Precio</th> 
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.order.map((row,id)=> {
        return (
            <tr key={id}>
                <td>{"1"}</td>
                <td>{row.product}</td>
                <td>{row.price}</td>
            </tr>
        )
    })
    
    return (
        <tbody>{rows}</tbody>
    )
}
const ShowTotal = props => {
    let total = props.order.reduce((sum, order) => {
        return sum + order.price
        },0)
        return (
        <tbody>
            <tr>
                <td>{}</td>
                <td>TOTAL:</td>
                <td>{total}</td>
            </tr>
        </tbody>)
};

class CheckCalculator extends React.Component
{

    render () {
        const { order } = this.props;

        return (
            <div>
                <h2>LA CUENTA</h2>
                <table>
                    <TableHeader />
                    <TableBody order={order}/>
                    <ShowTotal order={order} />
                </table>
            </div>
        )
    }
}

export default CheckCalculator;