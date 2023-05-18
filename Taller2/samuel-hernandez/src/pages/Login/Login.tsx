import "./Login.css";
import {Input} from "../../components/ui/Input/Input";
import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import SessionContext from "../../context/Session/SessionContext";
import {Eye, EyeSlash, Key, Person} from "react-bootstrap-icons";
import UserContext from "../../context/User/UserContext";
import {Helmet} from "react-helmet";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth, normalizeFirebaseErrorMessage} from "../../config/firebase";

export const Login = () => {
    const {setUser} = useContext(UserContext);
    const {login} = useContext(SessionContext);

    const [passwordHidden, togglePasswordHidden] = useState(true);
    const [info, setInfo] = useState(" ");
    const [infoClassName, setInfoClassName] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInfoClassName("loading");
        setInfo("Procesando...");
        const email: HTMLInputElement = (e.target as HTMLFormElement).loginEmail;
        const password: HTMLInputElement = (e.target as HTMLFormElement).loginPassword;
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((credentials) => {
                setInfoClassName("success");
                setInfo("Iniciando sesión...");
                const user = credentials.user;
                // setUser(user)
                login();
            }).catch((error) => {
                setInfoClassName("errored");
                const errorMessage = error.message;
                setInfo(normalizeFirebaseErrorMessage(errorMessage));
        });
    };

    const togglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        togglePasswordHidden(!passwordHidden);
    };

    return (
        <main className={"login"}>
            <Helmet>
                <title>Vallexplora | ¡Explora el Valle!</title>
            </Helmet>
            <section className={"login__container"}>
                <section className={"login__card"}>

                </section>
                <form className={"login__form"} onSubmit={handleSubmit}>
                    <h2>¡Hola de nuevo!</h2>
                    <Input type={"email"} label={"Correo"} name={"loginEmail"}
                           icon={<Person size={12} className={"input__icon"}/>}/>
                    <Input type={passwordHidden ? "password" : "text"} label={"Contraseña"} name={"loginPassword"}
                           icon={<Key size={12} className={"input__icon"}/>}
                           actionClick={(e) => togglePassword(e)}
                           actionIcon={passwordHidden ? <Eye size={12}/> :
                               <EyeSlash size={12}/>}/>
                    <input type={"submit"}/>
                    <p className={infoClassName}>{info}</p>
                </form>
            </section>
        </main>
    );
}