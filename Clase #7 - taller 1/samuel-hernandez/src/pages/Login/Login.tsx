import "./Login.css";
import {Input} from "../../components/ui/Input/Input";
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import SessionContext from "../../context/Session/SessionContext";
import {Key, Person} from "react-bootstrap-icons";
import UserContext from "../../context/User/UserContext";

interface IProps {

}

export const Login = (props : IProps) => {

    const navigate = useNavigate();
    const { setUsername } = useContext(UserContext);
    const { login } = useContext(SessionContext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username : HTMLInputElement = (e.target as HTMLFormElement).loginUsername;
        login();
        setUsername(username.value);
        navigate("/");
    };

    return  (
        <main className={"login"}>
            <section className={"login__container"}>
                <section className={"login__card"}>

                </section>
                <form className={"login__form"} onSubmit={handleSubmit}>
                    <h2>Welcome back!</h2>
                    <Input type={"text"} label={"Username"} name={"loginUsername"} icon={<Person size={12} className={"input__icon"}/>}/>
                    <Input type={"password"} label={"Password"} name={"loginPassword"} icon={<Key size={12} className={"input__icon"}/>} />
                    <input type={"submit"} />
                    <p>Test mode | no data being processed</p>
                </form>
            </section>
        </main>
    );
}