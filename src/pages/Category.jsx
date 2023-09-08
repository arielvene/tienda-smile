import { useEffect, useState } from "react";
import axios from 'axios';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom';


const Category = () => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products?limit=10")
            .then((res) => {
                const dataFiltered = res.data.products.filter(item => item.category === categoryId);
                setProducts(dataFiltered)})
            .catch((err) =>{});
    }, [categoryId]);


  return (
    <ItemListContainer productsData={products} />
  )
}

export default Category;