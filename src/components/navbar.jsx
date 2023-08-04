import { Link } from "react-router-dom";
import myImages from "./myimages";
function Navabr() {
    return (
     <div className=" bg-[#091734]">        
        <div className="flex justify-around items-center  sm:mr-[10%] sm:ml-[10%] pt-8 max-[640px]:justify-between max-[640px]:pt-4">
            <div id="logo" className="max-[640px]:w-16 max-[640px]:ml-8">
            <img className="w-17" src={myImages[2]} alt="logo" />
            </div>
            <div id="links" className="flex flex-row md:gap-6 sm:gap-1 max-[640px]:hidden">
            <Link> Home</Link>
            <Link> Clients </Link>
            <Link>Services</Link>
            <Link>Projects</Link>
            <Link> About</Link>
            <Link> Contact</Link>
            </div>
            <svg id="burger" className="w-8 h-9 max-[640px]:mr-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
        </div>
     </div>  
    );
}

export default Navabr;