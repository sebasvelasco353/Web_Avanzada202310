import {auth} from "../config/firebase";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function useRevalidateUser() {

    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.currentUser) {
            navigate("/login?redirect=true");
        }
        return;
    }, []);

}