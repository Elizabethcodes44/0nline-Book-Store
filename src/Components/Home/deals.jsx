import Features from "../../assets/deals.jpg";
import genres from "../../assets/genres.jpg";
import scifi from "../../assets/scifi.jpg";
import romance from "../../assets/Romance.jpg";
import nonfiction from "../../assets/nonfiction.jpg";

export default function Deals() {
  return (
    <>
    <div className="h-[600px] flex">
    
      <div className=" w-1/2 bg-cover bg-center mb-4 ml-4 rounded flex items-end mt-4 " style={{backgroundImage: `url(${Features})`}}>
        <h1 className="text-white text-5xl mx-10 my-10  font-bold">Best Sellers</h1>
        

      </div>
      <div className="w-1/2 grid grid-cols-2 gap-2 p-1  my-20 mx-10">
      <div  style={{backgroundImage: `url(${genres})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-48 ">
        <h1 className="text-white text-xl font-semibold border-2 border-white rounded-full">Genres</h1>

      </div>
      <div  style={{backgroundImage: `url(${scifi})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-48">
        <h1 className="text-white text-xl font-semibold border-2 border-white rounded-full">SCI - FI</h1>

      </div>
      <div  style={{backgroundImage: `url(${romance})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-48">
        <h1 className="text-white text-xl font-semibold border-2 border-white rounded-full">ROMANCE</h1>

      </div>
      <div  style={{backgroundImage: `url(${nonfiction})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-48">
        <h1 className="text-white text-xl font-semibold border-2 border-white rounded-full">NON-FICTION</h1>

      </div>
      </div>
    </div>
    </>
  );
}
