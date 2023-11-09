import { useOrderStore } from "../stores/orders/orderStore";

const DashboardPage = () => {
    const orders = useOrderStore((state) => state.orders);
    return(
        <>
            <h1>Dashboard</h1>
            <div>
                <p>Pedidos</p>
                <p>{orders.length}</p>
            </div>
        </>
    )
}

export default DashboardPage;