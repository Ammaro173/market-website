function Navbar() {
  return (
    <nav className="flex items-center justify-between h-16 gap-2 p-2 m-0 text-white list-none bg-violet-500 dark:md:hover:bg-violet-400">
      <a href="/" className="flex text-2xl font-semibold tracking-wide drop-shadow-md">
        AMARO & SOSO Co.
      </a>
      <ul className="flex items-stretch gap-4 p-2 m-0">
        <li >
          <a href="/product"  className="flex items-stretch hover:bg-violet-700">Our Products</a>
        </li>

        <li>
          <a href="/about" className="flex items-stretch hover:bg-violet-700">About</a>
        </li>

        <li>
          <a href="/contact" className="flex items-stretch hover:bg-violet-700">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

// const NavBar = () => {

//     return (
//         <nav className="flex h-10 gap-3 bg-red-900">

//             <ul className="flex gap-3">
//                 <li className="left-1">My Website</li>
//                 < div className="absolute top-0 right-0">
//                     <ul className="flex">
//                         <li className="mr-3 ">Home</li>
//                         <li className="ml-10 ">Contact Us</li>
//                     </ul>
//                 </div >

//             </ul >
//         </nav >
//     )

// }
