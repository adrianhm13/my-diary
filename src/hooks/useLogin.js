import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = (email, password) => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async () => {
        setError(null);
        setIsPending(true);
    
        //Login user
        try {
          const response = await projectAuth.signInWithEmailAndPassword(email, password);
    
          // Dispatch login action
          dispatch({ type: "LOGIN", payload: response.user });
    
          //Update states
          if (!isCancelled) {
            setIsPending(false);
            setError(null);
          }
        } catch (error) {
          if (!isCancelled) {
            setIsPending(false);
            setError(null);
          }
        }
      };

  //Cleanup function in case the async function it's active while the component it's unmounted
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { login, error, isPending };
};

}