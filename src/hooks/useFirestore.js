import { useReducer, useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  //Collection reference
  const ref = projectFirestore.collection(collection);

  //Add document
  const addDocument = (doc) => {};

  //Delete document
  const deleteDocument = (id) => {};
  
  useEffect(() => {
      return () => setIsCancelled(true)
  }, [])

  return {addDocument, deleteDocument, response}
};
