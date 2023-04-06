import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props)=>{

const Cartctx = useContext(CartContext)
const numberofCartItems = Cartctx.items.reduce((currNumber, item)=>{
    return currNumber + item.amount
},0)

return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofCartItems}</span>
    </button>
)
}

export default HeaderCartButton;