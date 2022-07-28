import { useEffect, useMemo, useState } from "react";
const axios = require("axios");
import ProductDetails from "./ProductDetails";

function Product() {
    const [products, setProducts] = useState([]);
    const dummy = {

        "id": "1",
        "name": "Product 1",
        "price": "100",

    }

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://sephora.p.rapidapi.com/products/list',
            params: { categoryId: 'cat150006', pageSize: '60', currentPage: '1' },
            headers: {
                'X-RapidAPI-Key': 'de0867458bmsh4f4a9c5a7209f3ep1bdd92jsn19dfd57e018a',
                'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setProducts(response.data.products);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    // console.log(products.length > 0 ?? products.categoryId);


    return (
        <>
            Main products here
            <br></br>

            <>{dummy.id}</>
            <hr></hr>
            <>{dummy.name}</>
            <br></br>
            <>{dummy.price}</>
            <hr></hr>
            {console.log(products?.map((ele) => { ele }))}
            {/* {console.log(products?.products[0].brandName)} */}
            {/* <>{products?.products?.map((ele) => { ele.brandName })}</> */}

            {/* <ProductDetails details={products} /> */}
        </>)
}

export default Product;