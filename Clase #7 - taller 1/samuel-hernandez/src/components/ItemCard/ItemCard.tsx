import {Item} from "../../interfaces/interfaces";
import "./ItemCard.css";
import {Basket, CartPlus} from "react-bootstrap-icons";

interface IProps {
    item : Item;
    children? : JSX.Element | JSX.Element[]
}

export const ItemCard = (props: IProps) => {

    const quantity = "n";
    const available = props.item.stock > 0;

    return (
        <article className={"item-card"}>
            <span className={"item-card__overlay"} />
            <section className={"item-card__info"}>
                <button className={`item-card__info__add ${available ? "item-card__info__add__enable" : "item-card__info__add__disable"}`} disabled={!available}>
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