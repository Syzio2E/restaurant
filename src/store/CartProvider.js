import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const CartReducer = (state,action) =>{
    if(action.type==='ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount =state.totalAmount+ action.item.price * action.item.amount
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] =  useReducer(CartReducer,defaultCartState)
    const addItemHandler = item=>{
        dispatchCartAction({type: 'ADD',item:item});
    }
    const removeItemHandler = id=>{
        dispatchCartAction({type:'REMOVE',id:id})
    }

    const cartcontext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

return <CartContext.Provider value={cartcontext}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider;