import { useOrderStore } from "../stores/orders/orderStore";
import  Order  from '../components/Order'
import { useState } from "react";

const OrdersPage = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const addOrder = useOrderStore((state) => (state.addOrder));
    const orders = useOrderStore((state) => (state.orders))
    const handleSubmit = e => {
        e.preventDefault();
        addOrder(name, price);
    }
    return(
        <div>
            <h1 className="font-bold text-xl">OrdersPage</h1>
            <form onSubmit={handleSubmit}>
                <h2 className="font-bold">Crear ordenes</h2>
                <label className="block">Nombre</label>
                <input type="text" placeholder="nombre" value={name} onChange={e => setName(e.target.value)}/>
                <label className="block">Precio</label>
                <input type="number" placeholder="precio" value={price} onChange={e => setPrice(e.target.value)}/>
                <button className="block">Crear</button>
            </form>
            <h3 className="font-bold">Lista de ordenes del usuario</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Producto</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map(item => (<Order key={item.id} props={item}/>))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrdersPage;