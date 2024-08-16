import genres from "../../assets/genres.jpg";
import scifi from "../../assets/scifi.jpg";
import romance from "../../assets/Romance.jpg";
import nonfiction from "../../assets/nonfiction.jpg";
import photography from "../../assets/Photography.jpg";
import tech from "../../assets/Techbooks.jpg";
export default function Categories() {
    return(
        <>
       
        <div className="h-screen flex flex col">
    
     
      <div className="flex space-x-2 mx-12 mb-4">
      <div  style={{backgroundImage: `url(${genres})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-50 w-[200px]">
        <h1 className="text-white text-xl font-semibold ">Genres</h1>

      </div>
      <div  style={{backgroundImage: `url(${scifi})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-50 w-[200px]">
        <h1 className="text-white text-xl font-semibold ">SCI - FI</h1>
      </div>
      <div  style={{backgroundImage: `url(${tech})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-50 w-[200px] ">
        <h1 className="text-white text-xl font-semibold ">Tech Books</h1>

      </div>
      <div  style={{backgroundImage: `url(${romance})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-50 w-[200px]">
        <h1 className="text-white text-xl font-semibold ">ROMANCE</h1>

      </div>
      <div  style={{backgroundImage: `url(${nonfiction})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-50 w-[200px] ">
        <h1 className="text-white text-xl font-semibold ">NON-FICTION</h1>
         

      </div>
      <div  style={{backgroundImage: `url(${photography})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-50 w-[200px]">
        <h1 className="text-white text-xl font-semibold    group-hover:opacity-100 group-hover:scale-125 transform transition-all duration-300">Photography</h1>

      </div>
      </div>
    </div>
    </>
    )
}