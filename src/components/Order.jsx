const Order = ({props}) => {
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.product}</td>
            <td>{props.price}</td>
        </tr>
    )
}

export default Order;