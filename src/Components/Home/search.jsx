import bgImage from "../../assets/landingpage.png";
export default function SearchBar() {
    return(
        <div className=" bg-cover  h-screen flex items-center justify-center gap-2" style={{backgroundImage: `url(${bgImage})`}}>
<input
placeholder="searchbyname"
className="rounded-full bg-brown shadow border-white border-2 p-4"/>
<input 
className="rounded-full bg-brown shadow border-white border-2 p-4"
placeholder="searchbylocation"/>
<button className="rounded-full bg-green-600 shadow text-white font-[20px] p-4">SEARCH</button>
        </div>
    )
}