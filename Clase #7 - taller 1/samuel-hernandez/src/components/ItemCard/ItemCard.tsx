import {Item} from "../../interfaces/interfaces";
import "./ItemCard.css";
import {CartPlus} from "react-bootstrap-icons";
import React, {useContext} from "react";
import CartContext from "../../context/Cart/CartContext";
import ModalContext from "../../context/Modal/ModalContext";

interface IProps {
    item : Item;
    children? : JSX.Element | JSX.Element[]
}

export const ItemCard = (props: IProps) => {
    const {open} = useContext(ModalContext);
    const { addItem, updateItem, findItemById } = useContext(CartContext);
    const available = props.item.stock > 0;

    const itemInCart = findItemById(props.item.id);
    const quantity = itemInCart !== undefined ? itemInCart.quantity : 0;

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (itemInCart === undefined) { // Item not found, add to cart
            addItem({
                ...props.item,
                quantity: 1
            });
        } else { // Item found, increase quantity by 1
            updateItem(itemInCart.id, {
                ...itemInCart,
                quantity: (itemInCart.quantity + 1)
            });
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        open(props.item);
    };

    return (
        <article className={"item-card"} onClick={handleClick}>
            <span className={"item-card__overlay"} />
            <section className={"item-card__info"}>
                <p>{quantity !== 0 ? `${quantity} in cart` : ""}</p>
                <button onClick={handleAddToCart} className={`item-card__info__add ${available ? "item-card__info__add__enable" : "item-card__info__add__disable"}`} disabled={!available}>
                    <CartPlus size={32}/>
                </button>
                <h2>{props.item.name}</h2>
                <h3 className={available ? "item-card__available" : "item-card__unavailable"}>{available ? `${props.item.stock} available • In stock` : "Out of stock"}</h3>
                <section className={"item-card__info__price__wrapper"}>
                    <h3 className={"item-card__info__price"}><span>$</span>{props.item.price}</h3>
                </section>
            </section>
        </article>
    );
}