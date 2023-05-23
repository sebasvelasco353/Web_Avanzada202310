import "./Home.css";
import {ItemCard} from "../../components/ItemCard/ItemCard";
import {ItemModal} from "../../components/ItemModal/ItemModal";
import {ModalProvider} from "../../context/Modal/ModalProvider";
import {Helmet} from "react-helmet";

export const Home = () => {
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

                    </section>
                </section>
                <ItemModal/>
            </main>
        </ModalProvider>
    );
}