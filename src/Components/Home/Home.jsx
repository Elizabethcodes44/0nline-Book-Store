import Deals from "./Deals/deals";
import SearchBar from "./search";

export default function Home() {
    return(
        <main >
        <div >
          <SearchBar/>
          <Deals />
        </div>
        </main>
    )
}