import { useEffect, useState } from "react";
const axios = require("axios");
import ProductDetails from "./ProductDetails";

function Product() {
    const [products, setProducts] = useState();
    const [show, setShow] = useState(false);
    const [moreDetails, setMoreDetails] = useState(false);
    const [onlyOne, setOnlyOne] = useState(false);
    const [onlyOneData, setOnlyOneData] = useState('');

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
        const options2 = {
            method: 'GET',
            url: 'https://sephora.p.rapidapi.com/products',
            params: { categoryId: 'cat150006', pageSize: '60', currentPage: '2' },
            headers: {
                'X-RapidAPI-Key': 'de0867458bmsh4f4a9c5a7209f3ep1bdd92jsn19dfd57e018a',
                'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            // let arr = []

            console.log(response.data);
            setProducts(response.data.products);
            // arr.push(response.data.products);
            // console.log("im array", arr);
            // arr = arr.map((elee) => { elee }),
            //     arr = { ...arr, shown: false }
            // console.log("im neww array", arr);

        }).catch(function (error) {
            console.error(error);
        });

        // axios.request(options2).then(function (response) {
        //     console.log(response.data);
        //     setProducts(response.data.products);
        // }).catch(function (error) {
        //     console.error(error);
        // });
    }, []);

    // console.log(products.length > 0 ?? products.categoryId);
    // const productList = useMemo(() => { return products ? products : dummy }, [products]);'
    function stars(rating) {
        let stars = "";
        for (let i = 0; i < rating; i++) {
            stars += "⭐";
        }
        return stars;
    }
    function showing() {
        if (show) {
            setShow(false);
            setMoreDetails(false);
            setOnlyOne(false);
        }
        else (setShow(true))

    }

    function online() {

        return onlyOne && <ProductDetails more={onlyOneData} />
    }



    return (
        <>
            <p className="content-center h-20 p-1 rounded ring-2 ring-gray-300 dark:ring-gray-500" onClick={() => { showing() }} >PRESSSSSSS MEE TO SHOW IMAGES</p>
            Main products here

            <br></br>
            {/* 
            <>{dummy.id}</>
            <hr></hr>
            <>{dummy.name}</>
            <br></br>
            <>{dummy.price}</>
            <hr></hr> */}
            {/* {console.log(products?.map((ele) => (ele.brandName)))} */}
            {console.log(products?.map((ele) => {
                return (ele.brandName)
            }))}
            {/* [...arr,show:false]
            [...arr,show:true] */}


            {/* {console.log(products?.products[0].brandName)} */}
            <div className="">{products?.map((ele) => {
                return (
                    <>
                        {show ? <img src={ele.heroImage} alt="" onClick={() => { setMoreDetails(!moreDetails), setOnlyOne(true), setOnlyOneData(ele.reviews) }}></img> : 'NO IMAGE </3 💔'}
                        <br></br>
                        {moreDetails ? <p>{stars(Math.round(ele.rating))}</p> : 'NO MORE DETAILS'}
                        <br></br>





                        <hr></hr>
                        <p>{ele.brandName}</p>
                        <br></br>
                    </>
                )

            }
            )}</div>
            {/* {online()} */}
            {onlyOne && online()}






        </>)
}

export default Product;