import "./ItemModal.css";
import {Plus, Dash} from "react-bootstrap-icons";
import React, {useContext, useState} from "react";
import ModalContext from "../../context/Modal/ModalContext";
import CartContext from "../../context/Cart/CartContext";
import {addDoc, collection } from "firebase/firestore";
import {db} from "../../config/firebase";
import {Input} from "../ui/Input/Input";
import {Button} from "../ui/Button/Button";

export const ItemModal = () => {
    const {isOpen, item, initialQuantity, close, editMode} = useContext(ModalContext);
    const {addItem, updateItem, removeItem, findItemById} = useContext(CartContext);
    const itemInCart = findItemById(item.id);
    const [quantity, setQuantity] = useState(initialQuantity);
    const [newStock, setNewStock] = useState(0);
    const quantityLimit = editMode ? 1000 : 100;
    const addDisable = editMode ? newStock === quantityLimit : quantity === quantityLimit;
    const removeDisable = editMode ? newStock === 0 : quantity === 0;

    const add = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (editMode) setNewStock((stock) => stock + 1);
        else setQuantity((quantity) => quantity + 1);
    };

    const remove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (editMode) setNewStock((stock) => stock - 1);
        else setQuantity((quantity) => quantity - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newQuantity = parseInt((e.target as HTMLInputElement).value);
        const parsedQuantity = newQuantity > quantityLimit ? quantityLimit : newQuantity < 0 ? 0 : newQuantity;
        if (editMode) setNewStock(parsedQuantity);
        else setQuantity(parsedQuantity);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.preventDefault();
        if ((e.target as HTMLInputElement).value === "") setQuantity(0);
    };

    const dismiss = () => {
        close();
    }

    const handleConfirm = async (e: React.MouseEvent<HTMLButtonElement>) => {
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = (e.target as HTMLFormElement);
        await addDoc(collection(db, "items"), {
            description: form.newDescription.value,
            inStock: true,
            name: form.newName.value,
            price: parseInt(form.newPrice.value),
            stock: newStock
        });
        await close();
    };

    if (editMode) return (
        <>
            <span onClick={handleCancel} className={`item-modal__overlay ${isOpen ? "modal-shown" : "modal-hidden"}`}/>
            <form className={`item-modal ${isOpen ? "modal-shown" : "modal-hidden"}`} onSubmit={handleSubmit}>
                <section>
                    <h2>New Item</h2>
                    <section className={"item-modal__new-fields"}>
                        <Input className={"input__over-dark"} type={"text"} label={"Item name"} name={"newName"}/>
                        <Input className={"input__over-dark"} type={"text"} label={"Description"}
                               name={"newDescription"} multiline/>
                        <Input type={"number"} label={"Price"} name={"newPrice"} className={"input__over-dark"}/>
                    </section>
                </section>
                <section>
                    <section className={"item-modal__add"}>
                        <h4 className={"available"}>{`${newStock} for stock`}</h4>
                        <section className={"item-modal__add__quantity"}>
                            <button className={"item-modal__add__quantity__add"} disabled={addDisable}
                                    onClick={add}>
                                <Plus size={32}/>
                            </button>
                            <input type={"number"} max={quantityLimit} min={0}
                                   className={"item-modal__add__quantity__number"}
                                   onChange={handleChange} value={newStock} onBlur={handleBlur}/>
                            <button className={"item-modal__add__quantity__remove"} disabled={removeDisable}
                                    onClick={remove}>
                                <Dash size={32}/>
                            </button>
                        </section>
                        <section className={"item-modal__add__button-bar"}>
                            <Button type={"submit"} variant={"contained"}
                                    className={"item-modal__add__button-bar__confirm"}>Confirm
                            </Button>
                            <Button variant={"contained"} onClick={handleCancel}
                                    className={"item-modal__add__button-bar__cancel"}>Cancel
                            </Button>
                        </section>
                    </section>
                </section>

            </form>
        </>
    );
    else return (
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