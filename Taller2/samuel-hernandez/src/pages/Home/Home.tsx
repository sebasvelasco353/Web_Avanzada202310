import "./Home.css";
import {ItemCard} from "../../components/ItemCard/ItemCard";
import {ItemModal} from "../../components/ItemModal/ItemModal";
import {Helmet} from "react-helmet";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../config/firebase";
import {Item} from "../../interfaces/interfaces";
import {useContext, useEffect, useState} from "react";
import {useRevalidateUser} from "../../hooks/useRevalidateUser";
import {Button} from "../../components/ui/Button/Button";
import ModalContext from "../../context/Modal/ModalContext";

export const Home = () => {

    const allowAdd = useRevalidateUser();
    const [items, setItems] = useState([] as Item[]);
    const {openOnEdit} = useContext(ModalContext);

    const fetchItems = async () => {
        const response = await getDocs(collection(db, "items"));
        const fetchedItems: Item[] = [];
        response.forEach((doc) => {
            const itemDoc: any = doc.data();
            itemDoc.id = doc.id;
            fetchedItems.push(itemDoc as Item);
        });
        setItems(fetchedItems);
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
            {allowAdd &&
                <Button onClick={handleClick} className={"button button__float"}>{"Add items"}</Button>

            }
        </main>
    );
}