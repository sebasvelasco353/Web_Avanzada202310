import {Navbar} from "../../components/ui/Navbar/Navbar";

interface IProps {

}

export const Home = (props: IProps) => {
    return (
        <main className={"home"}>
            <Navbar />
        </main>
    );
}