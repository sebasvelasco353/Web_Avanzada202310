import "./ItemModal.css";
import {Plus, Dash} from "react-bootstrap-icons";
import React, {useContext, useState} from "react";
import ModalContext from "../../context/Modal/ModalContext";
import CartContext from "../../context/Cart/CartContext";

export const ItemModal = () => {
    const {isOpen, item, initialQuantity, close} = useContext(ModalContext);
    const {addItem, updateItem, removeItem, findItemById} = useContext(CartContext);
    const itemInCart = findItemById(item.id);
    const [quantity, setQuantity] = useState(initialQuantity);
    const addDisable = quantity === 100;
    const removeDisable = quantity === 0;

    const add = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setQuantity((quantity) => quantity + 1);
    };

    const remove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setQuantity((quantity) => quantity - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newQuantity = parseInt((e.target as HTMLInputElement).value);
        setQuantity(newQuantity > 100 ? 100 : newQuantity < 0 ? 0 : newQuantity);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.preventDefault();
        if ((e.target as HTMLInputElement).value === "") setQuantity(0);
    };

    const dismiss = () => {
        close();
    }

    const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (quantity === 0) { // Remove item from cart entirely
            if (itemInCart) removeItem(itemInCart.id);
        } else {
            if (itemInCart) { // Item was already in cart, update it
                updateItem(itemInCart.id, {
                    ...itemInCart,
                    quantity
                });
            } else { // Item was not in cart, add it
                addItem({
                    ...item,
                    quantity
                });
            }
        }

        setQuantity(0);
        dismiss();
    };

    const handleCancel = (e: React.MouseEvent<HTMLButtonElement | HTMLSpanElement>) => {
        e.preventDefault();
        setQuantity(0);
        dismiss();
    };

    const inStock = item.stock > 0;

    return (
        <>
            <span onClick={handleCancel} className={`item-modal__overlay ${isOpen ? "modal-shown" : "modal-hidden"}`}/>
            <aside className={`item-modal ${isOpen ? "modal-shown" : "modal-hidden"}`}>
                <section>
                    <h2>{item.name}</h2>
                    <h4 className={inStock ? "available" : "unavailable"}>{inStock ? `${item.stock} in stock` : "Out of stock"}</h4>
                    <p className={"item-modal__description"}>{item.description}</p>
                    <h3>$ {item.price}</h3>
                    <p className={"item-modal__shipping"}>+shipping</p>
                </section>
                <section>
                    <section className={"item-modal__add"}>
                        <section className={"item-modal__add__quantity"}>
                            <button className={"item-modal__add__quantity__add"} disabled={addDisable || !inStock}
                                    onClick={add}>
                                <Plus size={32}/>
                            </button>
                            <input disabled={!inStock} type={"number"} max={100} min={0}
                                   className={"item-modal__add__quantity__number"}
                                   onChange={handleChange} value={quantity} onBlur={handleBlur}/>
                            <button className={"item-modal__add__quantity__remove"} disabled={removeDisable || !inStock}
                                    onClick={remove}>
                                <Dash size={32}/>
                            </button>
                        </section>
                        <section className={"item-modal__add__button-bar"}>
                            <button disabled={!inStock} onClick={handleConfirm}
                                    className={"item-modal__add__button-bar__confirm"}>Confirm
                            </button>
                            <button onClick={handleCancel} className={"item-modal__add__button-bar__cancel"}>Cancel
                            </button>
                        </section>
                    </section>
                </section>

            </aside>
        </>
    );
}