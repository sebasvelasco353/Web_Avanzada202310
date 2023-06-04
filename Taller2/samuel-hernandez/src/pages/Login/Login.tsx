import "./Login.css";
import {Input} from "../../components/ui/Input/Input";
import React, {useContext, useState} from "react";
import SessionContext from "../../context/Session/SessionContext";
import {EnvelopeAt, Eye, EyeSlash, Key} from "react-bootstrap-icons";
import UserContext from "../../context/User/UserContext";
import {Helmet} from "react-helmet";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth, db, normalizeFirebaseErrorMessage} from "../../config/firebase";
import {doc, getDoc} from "firebase/firestore";
import {User} from "../../interfaces/interfaces";
import {Button} from "@mui/material";

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
            .then(async (credentials) => {
                setInfoClassName("success");
                setInfo("Iniciando sesión...");
                const user = credentials.user;
                const userId = user.uid;
                const userDocRef = doc(db, "users", userId);
                const userDocSnap = await getDoc(userDocRef);
                setUser(userDocSnap.data() as User);
                login();
            }).catch((error) => {
            setInfoClassName("errored");
            const errorMessage = error.message;
            setInfo(normalizeFirebaseErrorMessage(errorMessage));
        });
    };

    const togglePassword = (e: React.MouseEvent<HTMLOrSVGElement>) => {
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
                           icon={<EnvelopeAt size={12} className={"input__icon"}/>}/>
                    <Input type={passwordHidden ? "password" : "text"} label={"Contraseña"} name={"loginPassword"}
                           icon={<Key size={12} className={"input__icon"}/>}
                           actionIcon={passwordHidden ?
                               <Eye size={12} className={"input__icon"} onClick={e => togglePassword(e)}/> :
                               <EyeSlash size={12} className={"input__icon"} onClick={e => togglePassword(e)}/>}/>
                    <Button type={"submit"} variant={"contained"}>Login</Button>
                    <Button color={"secondary"} variant={"outlined"}>Sign Up</Button>
                    <p className={infoClassName}>{info}</p>
                </form>
            </section>
        </main>
    );
}