import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const CartReducer = (state,action) =>{
    if(action.type==='ADD'){
        const updatedTotalAmount =state.totalAmount+ action.item.price * action.item.amount
        const existingCardItemIndex = state.items.findIndex(item => item.id=== action.item.id)
        const existingCartItem = state.items[existingCardItemIndex]
        
        let updatedItems;
        if(existingCartItem){
            
             const updatedItem={
                ...existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCardItemIndex] = updatedItem
        } else {
            updatedItems = state.item.concat(action.item)
        }
        
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