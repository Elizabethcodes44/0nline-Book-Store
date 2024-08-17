import genres from "../../../assets/genres.jpg";
import scifi from "../../../assets/scifi.jpg";
import romance from "../../../assets/Romance.jpg";
import nonfiction from "../../../assets/nonfiction.jpg";
import photography from "../../../assets/Photography.jpg";
import tech from "../../../assets/Techbooks.jpg";
import { useNavigate } from "react-router-dom";
export default function Categories() {
  const navigate = useNavigate();
  
  const handleThrillerCat = () => {
    navigate("/thrillercat");
    
  };
  const handleRomanceCat = () => {
    navigate("/romancecat");
    
  };
  const handleSciFiCat = () => {
    navigate("/scificat");
    
  };
  const handlePhotographyCat = () => {
    navigate("/photographycat");
    
  };
  const handleTechCat = () => {
    navigate("/technologycat");
    
  };
  const handleNonFictionCat = () => {
    navigate("/nonfictioncat");
    
  };
    return(
        <>
       
        <div className="h-screen flex flex col">
    
     
      <div className="flex space-x-2 mx-12 mb-4">
      <div  style={{backgroundImage: `url(${genres})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-50 w-[200px]">
        <h1 className="text-white text-xl font-semibold cursor-pointer" onClick={handleThrillerCat}>THRILLER</h1>

      </div>
      <div  style={{backgroundImage: `url(${scifi})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-50 w-[200px]">
        <h1 className="text-white text-xl font-semibold cursor-pointer" onClick={handleSciFiCat}>SCI - FI</h1>
      </div>
      <div  style={{backgroundImage: `url(${tech})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-50 w-[200px] ">
        <h1 className="text-white text-xl font-semibold cursor-pointer" onClick={handleTechCat}>Tech Books</h1>

      </div>
      <div  style={{backgroundImage: `url(${romance})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-50 w-[200px]">
        <h1 className="text-white text-xl font-semibold cursor-pointer" onClick= {handleRomanceCat}>ROMANCE</h1>

      </div>
      <div  style={{backgroundImage: `url(${nonfiction})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-50 w-[200px] ">
        <h1 className="text-white text-xl font-semibold cursor-pointer" onClick={handleNonFictionCat}>NON-FICTION</h1>
         

      </div>
      <div  style={{backgroundImage: `url(${photography})`}}className= "bg-cover bg-center  shadow-lg shadow-white flex items-center justify-center h-50 w-[200px]">
        <h1 className="text-white text-xl font-semibold    group-hover:opacity-100 group-hover:scale-125 transform transition-all duration-300 cursor-pointer" onClick={handlePhotographyCat}>Photography</h1>

      </div>
      </div>
    </div>
    </>
    )
}