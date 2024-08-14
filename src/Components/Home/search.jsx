import bgImage from "../../assets/landingpage.png";
export default function SearchBar() {
    return(
        <div className=" bg-cover  h-screen flex items-center justify-center" style={{backgroundImage: `url(${bgImage})`}}>
<input
placeholder="searchbyname"/>
<input 
placeholder="searchbylocation"/>
<button className="rounded-md bg-transparent shadow text-black font-[20px]">SEARCH</button>
        </div>
    )
}