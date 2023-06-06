import "./Home.css";
import {ItemCard} from "../../components/ItemCard/ItemCard";
import {ItemModal} from "../../components/ItemModal/ItemModal";
import {ModalProvider} from "../../context/Modal/ModalProvider";
import {Helmet} from "react-helmet";
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../config/firebase";
import {Item} from "../../interfaces/interfaces";
import {useContext, useEffect, useState} from "react";
import UserContext from "../../context/User/UserContext";
import {useRevalidateUser} from "../../hooks/useRevalidateUser";
import {Button} from "../../components/ui/Button/Button";
import ModalContext from "../../context/Modal/ModalContext";

export const Home = () => {

    useRevalidateUser();
    const [items, setItems] = useState([] as Item[]);
    const { openOnEdit } = useContext(ModalContext);

    const fetchItems = async () => {

        const itemsQuery = query(collection(db, "items"));

        const querySnapshot = await getDocs(itemsQuery);
        querySnapshot.forEach((doc) => {
            const itemizedDoc = { id: doc.id, ...doc.data()} as Item;
            setItems(items.concat(itemizedDoc));
        });

    }

    useEffect(() => {
        fetchItems();
    }, [])

    const handleClick = () => {
        openOnEdit();
    };

    return (
            <main className={"home"}>
                <Helmet>
                    <title>Hotshop | Home</title>
                </Helmet>
                <header className={"home__header"}>

                </header>
                <section className={"home__wrapper"}>
                    <section className={"home__content"}>
                        {items.map((item) => {
                            return (
                                <ItemCard key={`item${item.id}`} item={item}/>
                            );
                        })}
                    </section>
                </section>
                <ItemModal/>
                <Button onClick={handleClick} className={"button button__float"}>{"Add items"}</Button>
            </main>
    );
}