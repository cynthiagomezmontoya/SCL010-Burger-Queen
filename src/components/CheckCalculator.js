import React, { Component } from 'react';
import uuid from 'react-uuid'

/*
1. Nombrar objeto tr por id única
2. En el click, identifica tr con su uuid
3. Borra objeto de la tabla
4. setState a nueva "cuenta"
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

const DeleteItem = () => {
        return (
            <td><button>X</button></td>
        )
}

const TableBody = props => {
    const rows = props.order.map((row,id)=> {
        return (
            // entrega key e identifica objeto tr con id única
            <tr id={`tr${uuid()}`}key={id}>
                <td>{"1"}</td>
                <td>{row.product}</td>
                <td>{row.price}</td>
                <DeleteItem />
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

class CheckCalculator extends Component
{
    render () {
        const { order } = this.props;

        return (
            <section>
                <h2>LA CUENTA</h2>
                <table>
                    <TableHeader />
                    <TableBody order={order}/>
                    <ShowTotal order={order} />
                </table>
            </section>
        )
    }
}

export default CheckCalculator;