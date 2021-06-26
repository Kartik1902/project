import {useContext} from "react";
import Form from "./Form";

import styles from './Thing.module.css'
import CartContext from "../../../store/cart-context";

const Thing =(props) =>{
    const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };
        return(
            <li className={styles.item}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={styles.description}>{props.description}</div>
                    <div className={styles.price}>&#8377;{price}</div>
                </div>
                <div>
                    <Form id={props.id} onAddToCart={addToCartHandler} />
                </div>
            </li>
        );
}

export default Thing;