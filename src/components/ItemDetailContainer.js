import { useEffect, useState } from "react";
/*import customFetch from "../utils/CustomFetch";*/
import getItem from "../utils/getItem";
import ItemDetail from "./ItemDetail";
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        getItem(2000, products[4])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [products]);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;