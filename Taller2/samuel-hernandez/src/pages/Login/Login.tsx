import "./Login.css";
import {Input} from "../../components/ui/Input/Input";
import React, {useContext, useState, useEffect} from "react";
import SessionContext from "../../context/Session/SessionContext";
import {EnvelopeAt, Eye, EyeSlash, Key} from "react-bootstrap-icons";
import UserContext from "../../context/User/UserContext";
import {Helmet} from "react-helmet";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth, db, normalizeFirebaseErrorMessage} from "../../config/firebase";
import {collection, doc, getDoc, getDocs, query, where} from "firebase/firestore";
import {User} from "../../interfaces/interfaces";
import {Button} from "../../components/ui/Button/Button";
import material from "../../helpers/material";
import {Grid} from "@mui/material";
import {useLocation} from "react-router-dom";

export const Login = () => {
    const {setUser} = useContext(UserContext);
    const {login} = useContext(SessionContext);

    const [passwordHidden, togglePasswordHidden] = useState(true);
    const [info, setInfo] = useState(" ");
    const [infoClassName, setInfoClassName] = useState("loading");
    const search = useLocation().search;
    const redirect = new URLSearchParams(search).get("redirect");

    useEffect(() => {
        if (redirect !== null) {
            setInfoClassName("errored");
            setInfo("Please login to view the content");
        }
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInfoClassName("loading");
        setInfo("Loading...");
        const email: HTMLInputElement = (e.target as HTMLFormElement).loginEmail;
        const password: HTMLInputElement = (e.target as HTMLFormElement).loginPassword;
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then(async (credentials) => {
                setInfoClassName("success");
                setInfo("Signing you in...");
                const user = credentials.user;
                const userId = user.uid;
                const userCollection = collection(db, "users");
                const querySnapshot = await getDocs(query(userCollection, where('uid', '==', userId)))

                if (!querySnapshot.empty) {
                    const metadata = querySnapshot.docs[0].data();
                    setUser(metadata as User);
                }
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
                <title>Login - Hotshop | brewed for you</title>
            </Helmet>
            <Grid container spacing={{md: 3, xs: 2}} columns={{xs: 5, sm: 8, md: 12}} className={"login__container"}>
                <Grid item className={"login__card"} xs={0} sm={3} md={7}/>
                <Grid item xs={5} className={"login__form__container"}>
                    <form className={"login__form"} onSubmit={handleSubmit}>
                        <h2>Hello again!</h2>
                        <Input type={"email"} label={"Correo"} name={"loginEmail"}
                               icon={<EnvelopeAt size={12} className={"input__icon"}/>}/>
                        <Input type={passwordHidden ? "password" : "text"} label={"Contraseña"} name={"loginPassword"}
                               icon={<Key size={12} className={"input__icon"}/>}
                               actionIcon={passwordHidden ?
                                   <Eye size={12} className={"input__icon"} onClick={e => togglePassword(e)}/> :
                                   <EyeSlash size={12} className={"input__icon"} onClick={e => togglePassword(e)}/>}/>
                        <Button sxProps={{color: material("red")[100]}}
                                className={"button button__large"} type={"submit"} variant={"contained"}
                        >
                            {"Login"}
                        </Button>
                        <Button sxProps={{color: material("grey")[600]}} color={"secondary"}
                                className={"button button__large"} variant={"outlined"}>
                            <a href={"/register"}>{"Sign Up"}</a>
                        </Button>
                        <p className={infoClassName}>{info}</p>
                    </form>
                </Grid>
            </Grid>
        </main>
    )
        ;
}