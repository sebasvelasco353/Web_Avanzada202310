import "./ItemModal.css";
import {Plus, Dash} from "react-bootstrap-icons";
import React, {useState} from "react";

interface IProps {

}

export const ItemModal = (props: IProps) => {

    const [quantity, setQuantity] = useState(0);
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

    return (
        <aside className={"item-modal"}>
            <section>
                <h2>Product name</h2>
                <h4 className={"available"}>Stock</h4>
                <p className={"item-modal__description"}>Product description</p>
                <h3>$ 13000</h3>
                <p className={"item-modal__shipping"}>+shipping</p>
            </section>
            <section>
                <section className={"item-modal__add"}>
                    <section className={"item-modal__add__quantity"}>
                        <button className={"item-modal__add__quantity__add"} disabled={addDisable} onClick={add}>
                            <Plus size={32}/>
                        </button>
                        <input type={"number"} max={100} min={0} className={"item-modal__add__quantity__number"}
                               onChange={handleChange} value={quantity} onBlur={handleBlur}/>
                        <button className={"item-modal__add__quantity__remove"} disabled={removeDisable}
                                onClick={remove}>
                            <Dash size={32}/>
                        </button>
                    </section>
                    <section className={"item-modal__add__button-bar"}>
                        <button className={"item-modal__add__button-bar__confirm"}>Confirm</button>
                        <button className={"item-modal__add__button-bar__cancel"}>Cancel</button>
                    </section>
                </section>
            </section>

        </aside>
    );
}