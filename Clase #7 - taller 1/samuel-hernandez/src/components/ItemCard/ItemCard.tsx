import {Item} from "../../interfaces/interfaces";
import "./ItemCard.css";
import {Cart} from "react-bootstrap-icons";

interface IProps {
    item : Item;
    children? : JSX.Element | JSX.Element[]
}

export const ItemCard = (props: IProps) => {

    const quantity = "n";

    return (
        <article className={"item-card"}>
            <section className={"item-card__info"}>
                <section className={"item-card__info__state"}>
                    <p>{quantity} already in your cart</p>
                    <Cart size={16} className={"item-card__info__state__cart"}/>
                </section>
                <h2>{props.item.name}</h2>
                <h3>{props.item.stock > 0 ? `${props.item.stock} available • In stock` : "Out of stock"}</h3>
                <section className={"item-card__info__price__wrapper"}>
                    <h3 className={"item-card__info__price"}>${props.item.price}</h3>
                </section>
            </section>
        </article>
    );
}