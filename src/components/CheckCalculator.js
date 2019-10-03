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

const DeleteItem = (props) => {
    // console.log(props.trId);
        return (
            <td><button onClick={
                (e)=> {
                    console.log(props.trId)
                    }
                }>X</button></td>
        )
}

const TableBody = props => {
    const rows = props.order.map((row,id)=> {
        let trId = `tr${uuid()}`;
        return (
            // entrega key e identifica objeto tr con id única
            <tr id={trId} key={id}>
                <td>{"1"}</td>
                <td>{row.product}</td>
                <td>{row.price}</td>
                <DeleteItem trId={trId}/>
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
                <h2>Cuenta</h2>
                <table className="table table-hover">
                    <TableHeader />
                    <TableBody order={order}/>
                    <ShowTotal order={order} />
                </table>
            </section>
        )
    }
}

export default CheckCalculator;