import ItemDetail from "../ItemDetail/ItemDetail";
import React, {useEffect, useState} from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const  { detalleId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'product', detalleId);
        getDoc(queryDoc)
        .then(res => setData({ id: res.id, ...res.data()}))
        .catch((error) => {
            console.error("Error fetching document:", error);
          });
    }, [detalleId])

    return(
        <ItemDetail data = {data}/>
    );
}


export default ItemDetailContainer;
// getData.then (res => setData(res.find(product => product.id === parseInt(detalleId))));