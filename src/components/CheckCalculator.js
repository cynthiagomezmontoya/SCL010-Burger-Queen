import React from 'react';
import Breakfast from './Breakfast'

/*
TODO:
I. Crear calculadora estática
    1. Crear tabla (hardcorde) con CANTIDAD, ÍTEM y VALOR (c/u) con VALOR TOTAL al final ✓✓
    2. Agregar algunos productos con sus precios ✓✓
    3. Mostrar total ✓✓
    4. Crear función que genere tabla según cantidad de ítems en un array de mentira ✓✓
    5. Sumar cantidad de productos si se repiten <-- lo arreglamos al cerrar la historia 1
    6. Traspasar props desde Breakfast y Lunch
    7. Diseñar sistema de estados
    8. Agregar botones en Breakfast y Lunch para agregar productos a pasar en 
    calculadora de cuenta
    9. Crear tabla dinámicamente con data real
    10. Calcular cuenta con data real de Breakfast y Lunch
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

let fakeBreakfast = [{
    "id": "1",
    "type": "drink",
    "product": "Café americano",
    "price": 500,
    "size": "1x",
    "img": "https://image.flaticon.com/icons/svg/198/198618.svg"
  },
  {
    "id": "1",
    "type": "drink",
    "product": "Café americano",
    "price": 500,
    "size": "1x",
    "img": "https://image.flaticon.com/icons/svg/198/198618.svg"
  },
  {
    "id": "3",
    "type": "drink",
    "product": "Jugo natural",
    "price": 700,
    "size": "1x",
    "img": "https://image.flaticon.com/icons/svg/198/198618.svg"
  },  
  {
    "id": "3",
    "type": "drink",
    "product": "Jugo natural",
    "price": 700,
    "size": "1x",
    "img": "https://image.flaticon.com/icons/svg/198/198618.svg"
  }
];

const TableBody = props => {
    const rows = fakeBreakfast.map((row,id)=> {
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

class CheckCalculator extends React.Component
{
    render () {
        return (
            <div>
                <h2>LA CUENTA</h2>
                <TableHeader />
                <TableBody />
            </div>
        )
    }
}

export default CheckCalculator;