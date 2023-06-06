import {Helmet} from "react-helmet";
import "./Cart.css";
import React, {useContext} from "react";
import CartContext from "../../context/Cart/CartContext";
import {CartEntry} from "../../components/CartEntry/CartEntry";
import UserContext from "../../context/User/UserContext";
import {useNavigate} from "react-router-dom";

export const Cart = () => {

    const {items, clear, updateItem, productNumber, total} = useContext(CartContext);
    const {username} = useContext(UserContext);
    const renderedTotal = ((Math.round(total) * 100) / 100).toFixed(2);
    const navigate = useNavigate();

    const cancel = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate("/");
    };

    const checkout = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Update stocks won't work because tiny little Samuel loaded everything from a JSON array
        items.forEach(it => {
            const newStock = it.stock - it.quantity;
            updateItem(it.id, {...it, stock: newStock});
        });

        // Clear cart
        clear();
        alert(`You have successfully paid $${renderedTotal} to the Chinese government and have now been deducted -198327212 social points 🫡🥶😱🥸`);
        navigate("/");
    };

    return (
        <main className={"cart"}>
            <Helmet>
                <title>Hotshop | Cart</title>
            </Helmet>
            <section className={"cart__background"}>
                <span className={"cart__background__image"}/>
                <span className={"cart__background__overlay"}/>
            </section>
            <section className={"cart__wrapper"}>
                <section className={"cart__content glass"}>
                    <section className={"cart__content__heading"}>
                        <h2>My Cart</h2>
                        <h2>{productNumber} {productNumber === 1 ? "Item" : "Items"}</h2>
                    </section>
                    <ul>
                        {productNumber > 0 ? items.map((it, index) => {
                                return (
                                    <li key={`liCartItem${index}`}>
                                        <CartEntry key={it.id} item={it}/>
                                    </li>
                                )
                            })
                            : (
                                <p>Nothing to show here yet...</p>
                            )}
                    </ul>
                </section>
                <section className={"cart__billing glass"}>
                    <h2>Billing info</h2>
                    <section className={"cart__billing__wrapper"}>
                        {productNumber > 0 && (
                            <section className={"cart__billing__details"}>
                                <section className={"cart__billing__details__group"}>
                                    <h3>Order recipient</h3>
                                    <h3 className={"cart__billing__details__group__data"}>{username || "Anonymous"}</h3>
                                </section>
                                <section className={"cart__billing__details__group"}>
                                    <h3>Order total</h3>
                                    <h3 className={"cart__billing__details__group__data"}>{renderedTotal}</h3>
                                </section>
                            </section>
                        )}
                        <section className={"cart__billing__buttons"}>
                            <button onClick={e => checkout(e)} className={"checkout"}
                                    disabled={productNumber <= 0}>Checkout
                            </button>
                            <button onClick={e => cancel(e)} className={"cancel"}>Cancel</button>
                        </section>
                    </section>
                </section>
            </section>
        </main>
    );
}