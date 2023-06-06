import {auth} from "../config/firebase";
export function useRevalidateUser() {

    return auth.currentUser;

}