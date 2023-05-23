import "./Home.css";
import {ItemCard} from "../../components/ItemCard/ItemCard";
import {ItemModal} from "../../components/ItemModal/ItemModal";
import {ModalProvider} from "../../context/Modal/ModalProvider";
import {Helmet} from "react-helmet";
import {collection, doc, getDoc, getDocs, query} from "firebase/firestore";
import {db} from "../../config/firebase";
import {Item, User} from "../../interfaces/interfaces";
import {useEffect, useState} from "react";

export const Home = () => {

    const [items, setItems] = useState([] as Item[]);

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

    return (
        <ModalProvider>
            <Helmet>
                <title>Hotshop | Home</title>
            </Helmet>
            <main className={"home"}>
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
            </main>
        </ModalProvider>
    );
}