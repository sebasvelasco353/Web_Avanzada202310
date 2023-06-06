import {Helmet} from "react-helmet";
import React, {useEffect, useState} from "react";
import "./Register.css";
import {Grid} from "@mui/material";
import {Input} from "../../components/ui/Input/Input";
import {EnvelopeAt, Eye, EyeSlash, Key, Person} from "react-bootstrap-icons";
import {Button} from "../../components/ui/Button/Button";
import material from "../../helpers/material";
import {auth, db, normalizeFirebaseErrorMessage} from "../../config/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {addDoc, collection} from "firebase/firestore";
import {useNavigate} from "react-router-dom";

export const Register = () => {

    const navigate = useNavigate();

    const [passwordHidden, togglePasswordHidden] = useState(true);
    const [info, setInfo] = useState(" ");
    const [infoClassName, setInfoClassName] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const validatePasswordsMatch = (pass: HTMLInputElement, confirm: HTMLInputElement) => {
        if (pass.value !== confirm.value) {
            setPasswordError(true);
            setInfoClassName("errored");
            setInfo("Passwords do not match");
            return null;
        } else return pass.value;
    }

    const registerUser = async (email: string, pass: string, metadata: { displayName: string }) => {
        const {user} = await createUserWithEmailAndPassword(auth, email, pass);
        const usersCollection = collection(db, 'users');
        return addDoc(usersCollection, {uid: user.uid, ...metadata, email}).then((u) => {
            setInfoClassName("success");
            setInfo('User registered successfully!');
            return user;
        }).catch((error) => {
            setInfoClassName("errored");
            setInfo(normalizeFirebaseErrorMessage(error.message));
            return user;
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInfoClassName("loading");
        setInfo("Loading...");
        const form = (e.target as HTMLFormElement);
        const pass = validatePasswordsMatch(form.password as HTMLInputElement, form.confirmPassword as HTMLInputElement);
        const email = (form.email as HTMLInputElement).value;
        const username = form.username;
        if (pass !== null) {
            registerUser(email, pass, {displayName: username.value}).then((user) => {
                navigate("/login");
            }).catch((error) => {
                setInfoClassName("errored");
                setInfo(normalizeFirebaseErrorMessage(error.message));
            });
        }
    };

    const togglePassword = (e: React.MouseEvent<HTMLOrSVGElement>) => {
        e.preventDefault();
        togglePasswordHidden(!passwordHidden);
    };

    return (
        <main className={"register"}>
            <Helmet>
                <title>Register - Hotshop | brewed for you</title>
            </Helmet>
            <Grid container spacing={2} columns={5} className={"register__container"}>
                <Grid item xs={5} className={"register__form__container"}>
                    <form className={"register__form"} onSubmit={handleSubmit}>
                        <h2>Create a new user</h2>
                        <Input type={"text"} label={"Username"} name={"username"}
                               icon={<Person size={12} className={"input__icon"}/>}/>
                        <Input error={emailError} type={"email"} label={"Email"} name={"email"}
                               icon={<EnvelopeAt size={12} className={"input__icon"}/>}/>
                        <Input error={passwordError} type={passwordHidden ? "password" : "text"} label={"Password"}
                               name={"password"}
                               icon={<Key size={12} className={"input__icon"}/>}
                               actionIcon={passwordHidden ?
                                   <Eye size={12} className={"input__icon"} onClick={e => togglePassword(e)}/> :
                                   <EyeSlash size={12} className={"input__icon"} onClick={e => togglePassword(e)}/>}/>
                        <Input error={passwordError} type={passwordHidden ? "password" : "text"}
                               label={"Confirm Password"} name={"confirmPassword"}
                               icon={<Key size={12} className={"input__icon"}/>}
                               actionIcon={passwordHidden ?
                                   <Eye size={12} className={"input__icon"} onClick={e => togglePassword(e)}/> :
                                   <EyeSlash size={12} className={"input__icon"} onClick={e => togglePassword(e)}/>}/>
                        <Button sxProps={{color: material("red")[100]}}
                                className={"button button__large"} type={"submit"} variant={"contained"}
                        >
                            {"Create user"}
                        </Button>
                        <Button sxProps={{color: material("grey")[600]}} color={"secondary"}
                                className={"button button__large"} variant={"outlined"}>
                            <a href={"/login"}>{"Cancel"}</a>
                        </Button>
                        <p className={infoClassName}>{info}</p>
                    </form>
                </Grid>
            </Grid>

        </main>
    );
}