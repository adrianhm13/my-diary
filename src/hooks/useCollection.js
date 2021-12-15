import { useState, useEffect, useRef } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query, _category, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  //Without ref -> infinite loop in useEffect
  const query = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;
  const category = useRef(_category).current;

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }
    if( category){
      ref = ref.where(...category)
    }
    if(orderBy) {
      ref = ref.orderBy(...orderBy)
    }
    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];

        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError(error.message);
      }
    );

    return () => unsubscribe();
  }, [collection, query, orderBy, category]);

  return { documents, error };
};
