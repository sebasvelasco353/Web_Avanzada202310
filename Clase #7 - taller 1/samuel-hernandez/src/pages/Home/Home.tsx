import "./Home.css";
import {AvailableItems} from "../../data/AvailableItems";
import {ItemCard} from "../../components/ItemCard/ItemCard";
import {ItemModal} from "../../components/ItemModal/ItemModal";
import {ModalProvider} from "../../context/Modal/ModalProvider";

interface IProps {

}

export const Home = (props: IProps) => {

    return (
        <ModalProvider>
            <main className={"home"}>
                <header className={"home__header"}>

                </header>
                <section className={"home__wrapper"}>
                    <section className={"home__content"}>
                        {AvailableItems.map((item, index) => {
                            return <ItemCard key={`itemCard${index}`} item={item}/>;
                        })}
                    </section>
                </section>
                <ItemModal/>
            </main>
        </ModalProvider>
    );
}