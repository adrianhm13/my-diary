import { useReducer, useState, useEffect } from "react";
import { projectFirestore, timestamp } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: false,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { document: null, isPending: true, error: null, success: false };
    case "ADD_DOCUMENT":
      return {
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case "DELETE_DOCUMENT":
      return {
        document: null,
        isPending: false,
        error: null,
        success: true,
      };
    case "EDIT_DOCUMENT":
      return {
        document: action.payload,
        isPending: false,
        error: null,
        success: true,
      };
    case "ERROR":
      return {
        document: null,
        isPending: false,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  //Collection reference
  const ref = projectFirestore.collection(collection);

  //Dispatch if it's not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  //Add document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt });
      console.log(doc);
      dispatchIfNotCancelled({ type: "ADD_DOCUMENT", payload: addedDocument });
    } catch (error) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
    }
  };

  //Delete document
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });

    try {
      await ref.doc(id).delete();
      dispatchIfNotCancelled({ type: "DELETE_DOCUMENT" });
    } catch (error) {
      dispatchIfNotCancelled({
        type: "ERROR",
        payload: "Could not delete the entry",
      });
    }
  };

  //Edit document
  const editDocument = async (id, doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const updatedDocument = await ref.doc(id).update(doc);
      dispatchIfNotCancelled({
        type: "EDIT_DOCUMENT",
        payload: updatedDocument,
      });
    } catch (error) {
      dispatchIfNotCancelled({
        type: "ERROR",
        payload: "Could not edit the entry",
      });
    }
  };
  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, deleteDocument, editDocument, response };
};
