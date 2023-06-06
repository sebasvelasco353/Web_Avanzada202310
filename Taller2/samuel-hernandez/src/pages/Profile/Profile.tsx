import {useRevalidateUser} from "../../hooks/useRevalidateUser";

interface IProps {

}

export const Profile = (props: IProps) => {

    useRevalidateUser();

    return (
        <main className={"profile"}>

        </main>
    );
}