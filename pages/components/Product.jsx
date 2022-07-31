import { useEffect, useId, useState } from "react";
const axios = require("axios");
import ProductDetails from "./ProductDetails";
import Search from "./Search";

function Product() {
    const [products, setProducts] = useState();
    const [show, setShow] = useState(false);
    const [moreDetails, setMoreDetails] = useState(false);
    const [onlyOne, setOnlyOne] = useState(false);
    const [onlyOneData, setOnlyOneData] = useState('');
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState(products);

    const handleSearchChange = (e) => {

        setSearch(e.target.value || "")
        setFiltered(products?.filter(elee => { return elee.brandName.toString().toLowerCase().includes(search.toLowerCase()) }))
        console.log(filtered)
    }

    const renderAll = () => {
        if (search === "") {
            return (products && products?.map((ele, indx) => {
                return (
                    <div key={indx} className="border-4 border-dashed rounded-md shadow-md border-amber-600" >
                        <p>{ele.brandName}</p>
                        <br></br>
                        {show ? <img src={ele.heroImage} alt="" onClick={() => { setMoreDetails(!moreDetails), setOnlyOne(true), setOnlyOneData(ele.reviews) }}></img> : 'NO IMAGE </3 💔'}
                        <br></br>
                        <hr></hr>
                        {moreDetails ? <p>{stars(Math.round(ele.rating))}</p> : 'NO MORE DETAILS'}
                        <br></br>
                    </div>
                )
            }))
        }
        else {
            return (filtered && filtered?.map((ele, indx) => {
                return (
                    <div key={indx} className="border-4 border-dotted rounded-md shadow-md border-amber-800 overscroll-auto"  >
                        <p>{ele.brandName}</p>
                        <br></br>
                        {show ? <img src={ele.heroImage} alt="" onClick={() => { setMoreDetails(!moreDetails), setOnlyOne(true), setOnlyOneData(ele.reviews) }}></img> : 'NO IMAGE </3 💔'}
                        <br></br>
                        <hr></hr>
                        {moreDetails ? <p>{stars(Math.round(ele.rating))}</p> : 'NO MORE DETAILS'}
                        <br></br>
                    </div>
                )

            }))
        }
    }

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://sephora.p.rapidapi.com/products/list',
            params: { categoryId: 'cat150006', pageSize: '60', currentPage: '1' },
            headers: {
                'X-RapidAPI-Key': '929b560d74msh5c553208cc9faffp11dec4jsna4a9edbc17a2',
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

    function stars(rating) {
        let stars = "";
        for (let i = 0; i < rating; i++) {
            stars += "⭐ ";
        }
        return `Rating: ${stars}`;
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
            <div id="button" className="content-center object-center m-7 ">
                <button type="checkbox" className="w-2/12 p-2 text-center text-indigo-500 bg-gray-700 border-2 border-indigo-400 rounded focus:outline-none hover:bg-gray-400" onClick={() => { showing() }} >PRESSSSSSS MEE TO SHOW\Hide IMAGES </button >
            </div>

            <div class="flex justify-center">
                <div class="form-check form-switch">
                    <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label class="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault">PRESSSSSSS MEE TO SHOW\Hide IMAGES </label>
                </div>
            </div>

            <br></br>
            {onlyOne && online()}
            <hr></hr>
            <Search handleSearchChange={handleSearchChange} />
            <hr></hr>
            <div className="flex flex-wrap grid-flow-col gap-24 overscroll-auto" >{renderAll()}</div>

        </>)
}

export default Product;


