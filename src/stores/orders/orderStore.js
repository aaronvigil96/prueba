import {create} from 'zustand';

export const useOrderStore = create((set) => ({
    orders: [{id:1, product: 'yerba', price:230, completed: true}],
    addOrder: (product, price, completed = false) => set((state) => ({
        orders: [...state.orders, {id: state.orders.length + 1, product, price, completed}]
    }))
}))