import { Link } from "react-router-dom";
import Fetchdata from "../components/Fetchdata";
import SingleProduct from "./SingleProduct";


const Catagories = () => {
  const products = Fetchdata();

  return (
    <>
    
    
    <section className="container mx-auto w-[80%]  col-span-7">

      <h2 className="text-4xl py-10 text-center font-medium text-gray-700">
      Catagories
      </h2>
      <div className="grid grid-cols-2 gap-10 mx-auto pb-20">

      
      <Link to="catagory">
      <div className="single-product flex flex-col bg-gray-50 gap-3 shadow-md hover:shadow-xl hover:scale-105 duration-300 px-4 py-7 rounded-sm overflow-hidden">
      <div className="flex justify-center">
          <text>BEDROOM</text>
      </div>
    </div>
    </Link>
    <Link to="catagory1">
    <div className="single-product flex flex-col bg-gray-50 gap-3 shadow-md hover:shadow-xl hover:scale-105 duration-300 px-4 py-7 rounded-sm overflow-hidden">
      <div className="flex justify-center">
          <text>KITCHEN</text>
      </div>
    </div>
    </Link>
    





      </div>
    </section>
   
    </>
  );
};

export default Catagories;
