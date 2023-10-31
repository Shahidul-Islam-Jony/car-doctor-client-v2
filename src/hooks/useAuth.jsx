// creating custom hook

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;    //ekadhik value return korte  hole array akare return korte hobe
};

export default useAuth;