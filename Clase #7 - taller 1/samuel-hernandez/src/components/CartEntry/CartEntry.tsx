import "./CartEntry.css";
import {CartItem} from "../../interfaces/interfaces";
import {Trash} from "react-bootstrap-icons";
import React, {useContext} from "react";
import CartContext from "../../context/Cart/CartContext";

interface IProps {
    item : CartItem,
}

export const CartEntry = (props: IProps) => {

    const {removeItem} = useContext(CartContext);

    const remove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        removeItem(props.item.id);
    };

    return (
        <section className={"entry"}>
            <button onClick={e => remove(e)} className={"entry__trash"}>
                <Trash size={42}/>
            </button>
            <h2 className={"entry__name"}>{props.item.name}</h2>
            <h2>x{props.item.quantity}</h2>
            <h2>${(Math.round((props.item.price * props.item.quantity) * 100) / 100).toFixed(2)}</h2>
        </section>
    );
}