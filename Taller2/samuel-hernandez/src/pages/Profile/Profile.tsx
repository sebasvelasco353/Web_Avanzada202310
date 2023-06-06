import {useRevalidateUser} from "../../hooks/useRevalidateUser";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

interface IProps {

}

export const Profile = (props: IProps) => {

    const shouldLogin = !useRevalidateUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (shouldLogin) navigate("/login?redirect=true");
    }, []);

    return (
        <main className={"profile"}>

        </main>
    );
}