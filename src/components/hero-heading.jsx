import logo from "./mylogos";

function Hero_heading() {


    return (<>
        <div className="hero-heading">
            <div className="grid grid-cols-2 grid-rows-2">
                <div className="ml-[190px] mt-[30px] max-[640px]:ml-[30px] max-[640px]:mt-[20px]">
                    <h1 className="text-gray-100 font-bold text-5xl max-[640px]:text-lg"> We Provide Smart Business Solutions</h1>
                    <p className="text-gray-300 text-[12px] max-[640px]:text-[5px]  ">Grow your Business With Us Best Business Solutions</p>
                </div>
                <div>
                </div>
            </div>

            <div className="w-[70%] m-auto ">
                <div className="grid grid-cols-2 mt-[180px] grid-rows-2 max-[640px]:mt-[220px]">
                    <h2 className="text-3xl font-bold max-[640px]:text-lg">We’ve More Then 254+
                        Global Partners</h2>
                    <p className="text-[11px] text-gray-500 tracking-wider leading-3">Sed ut perspiciatis unde omnis natus error voluptatem santium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae
                        ab nllo inventore veritatis quasi architecto beatae vitae</p>
                       <div className="col-span-2 bg-[#464548] h-[0.5px] mt-10 "></div>
                    <div className="grid col-span-2 max-[640px]:mt-[-30px]">
                        <div className="flex gap-2">
                            <div><img src={logo[0]} alt="logo1" className="" /></div>
                            <div><img src={logo[1]} alt="logo2" /></div>
                            <div> <img src={logo[2]} alt="logo3" /></div>
                            <div> <img src={logo[3]} alt="logo4" /></div>
                            <div><img src={logo[4]} alt="logo5" /></div>
                            <div><img src={logo[3]} alt="logo4" /></div>

                        </div>
                    </div>
                </div>
            </div>





        </div>


    </>);
}

export default Hero_heading;