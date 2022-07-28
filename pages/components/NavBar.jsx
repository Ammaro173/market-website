

const NavBar = () => {


    return (
        <nav className="flex h-10 gap-3 bg-red-900">

            <ul className="flex gap-3">
                <li className="left-1">My Website</li>
                < div className="absolute top-0 right-0">
                    <ul className="flex">
                        <li className="mr-3 ">Home</li>
                        <li className="ml-10 ">Contact Us</li>
                    </ul>
                </div >

            </ul >
        </nav >
    )


}


export default NavBar



// () => {
//     <div className="navbar ">?!?!</div>

//     {




//     }
// }



// {/* <div> {hi.map((ele) => (<p>{ele}</p>))}</div>
//         {console.log("im cons", hi)} */}

// {
//     hi.map((item, index) => (<p key={index}> {item} </p>)
//     )
// }
