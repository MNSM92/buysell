import { Link, NavLink } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="w-full  shadow-lg backdrop-blur-lg py-3 text-gray-900 bg-gray-50">
      <nav className="flex items-center container mx-auto">
        <Image src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" atl="Buy-Sell"/>
        <Link to="/" className="text-gray-700 italic text-4xl">Buy-Sell Furnitures</Link>
        <NavLinkRight home={"Home"} list={['About', 'Product', 'Booking', 'Blogs']}/>
        <ul className="flex justify-center items-center ml-2 gap-5">
        <Select option={['Seller','Buyer', 'Admin', 'Nasrin']}/>
        <NavLink to="/login"> <FaArrowCircleLeft /> </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


function Select(props){
  const myLists = props.option;
  const options = myLists.map((n)=><option>{n}</option>)
  return (
    <div>
      <select className="block w-full p-3 rounded-md border-0 py-1.5 shadow-sm ring-1 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs">
      {options}
      </select>

    </div>
  );
}

function Image(props){
  return(
    <div className="flex flex-shrink-0 items-center">   
      <img
        className="hidden h-8 w-auto lg:block"
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
}

/*
  Function --------------------------------------------------------
*/

function NavLinkRight(props){
  const myPath = props.list;
  
  const options = myPath.map((n)=>
    <li>
        <NavLink to={`/${n.toLowerCase()}`}>{n}</NavLink>
    </li>)

  return (
    <>
    <ul className="list-none flex justify-center items-center ml-auto gap-5">
      <li>
        <NavLink to="/">{props.home}</NavLink>
      </li>
      {options}
    </ul>
    </>
  );
}