import Footer from "../component/Footer";
import { GenesProvider } from "../component/GenesContext";
import MovieList from "../component/MovieList";
import NavBarEx from "../component/Navbar";
import { SearchProvider } from "../component/SearchContext";


export default function Home(){
   return (
    <SearchProvider>
      <GenesProvider>
    <div style={{display:"flex",flexDirection:'column'}}>
      <NavBarEx  />
      
      <MovieList/>
     
      <Footer/>
     </div>
    </GenesProvider>
    </SearchProvider>

   );

}