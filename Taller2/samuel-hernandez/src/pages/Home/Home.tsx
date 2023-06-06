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

export const Home = () => {

    useRevalidateUser();
    const [items, setItems] = useState([] as Item[]);
    const { getUser } = useContext(UserContext)

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
        console.log(getUser())
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
                    {getUser().isAdmin && <button>
                        Soy admin
                    </button>}
                </section>
                <ItemModal/>
            </main>
        </ModalProvider>
    );
}