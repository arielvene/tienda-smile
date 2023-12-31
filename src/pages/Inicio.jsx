import { useEffect, useState } from "react";
import axios from 'axios';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Inicio = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products?limit=10")
            .then((res) => {setProducts(res.data.products)})
            .catch((err) =>{});
    }, []);


  return (
    <ItemListContainer productsData={products} />
  )
}

export default Inicio;