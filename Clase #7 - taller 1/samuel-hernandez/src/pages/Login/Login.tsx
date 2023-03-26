import "./Login.css";
import {Input} from "../../components/ui/Input/Input";
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import RoutingContext from "../../context/Routing/RoutingContext";
import SessionContext from "../../context/Session/SessionContext";
import {Key, Person} from "react-bootstrap-icons";

interface IProps {

}

export const Login = (props : IProps) => {

    const navigate = useNavigate();
    const { setCurrent } = useContext(RoutingContext);
    const { login } = useContext(SessionContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login();
        setCurrent("home")
        navigate("/");
    };

    return  (
        <main className={"login"}>
            <section className={"login__container"}>
                <section className={"login__card"}>

                </section>
                <form className={"login__form"} onSubmit={handleSubmit}>
                    <h2>Welcome back</h2>
                    <Input type={"text"} label={"Username"} name={"loginUsername"} icon={<Person size={48} />}/>
                    <Input type={"password"} label={"Password"} name={"loginPassword"} icon={<Key size={48} />} />
                    <input type={"submit"} />
                    <p>Test mode | no data being processed</p>
                </form>
            </section>
        </main>
    );
}