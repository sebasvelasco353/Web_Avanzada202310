import "./Home.css";
import {AvailableItems} from "../../data/AvailableItems";
import {ItemCard} from "../../components/ItemCard/ItemCard";
interface IProps {

}

export const Home = (props: IProps) => {


    return <main className={"home"}>
        <header className={"home__header"}>

        </header>
        <section className={"home__wrapper"}>
            <section className={"home__content"}>
                {AvailableItems.map((item, index) => {
                    return <ItemCard key={`itemCard${index}`} item={item} />;
                })}
            </section>
        </section>
    </main>;
}