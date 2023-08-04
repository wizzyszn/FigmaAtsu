import logo from './mylogos'

function Hero_heading () {
  return (
    <>
      <div className='hero-heading'>
        <div className='grid grid-cols-2 grid-rows-2'>
          <div className='ml-[250px] mt-[130px] max-[640px]:ml-[30px] max-[640px]:mt-[20px]'>
            <h1 className='text-gray-100 font-bold text-5xl max-[640px]:text-lg'>
              We Provide Smart Business Solutions
            </h1>
            <p className='text-gray-300 text-[16px] max-[640px]:text-[5px]  '>
              Grow your Business With Us Best Business Solutions
            </p>
          </div>
          <div></div>
        </div>

        <div className='w-[70%] m-auto '>
          <div className='grid grid-cols-2 mt-[230px] grid-rows-2 max-[640px]:mt-[180px]'>
            <div>
              <h3 className='stroked-text max-[640px]:translate-x-[-30px]'>
                BRAND
              </h3>
              <h3 className='text-3xl font-bold max-[640px]:text-lg translate-y-[-75px] max-[640px]:translate-y-[-45px] max-[640px]:translate-x-[-4px]'>
                We’ve More Than 254+ Global Partners
              </h3>
            </div>

            <p className='text-[14px] text-gray-500 tracking-wider leading-3 max-[640px]:tracking-tight max-[640px]:mt-3 max-[640px]:ml-3  translate-y-[80px] max-[640px]:translate-y-[17px] ] max-[640px]:translate-x-[9px]'>
              Sed ut perspiciatis unde omnis natus error voluptatem santium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab nllo
              inventore veritatis quasi architecto beatae vitae
            </p>
            <div className='col-span-2 bg-[#464548] h-[0.5px] translate-y-20'></div>
            <div className='grid col-span-2 max-[640px]:mt-[-70px]'>
              <div className='flex gap-2 justify-center'>
                <div>
                  <img src={logo[0]} alt='logo1' />
                </div>
                <div>
                  <img src={logo[1]} alt='logo2' />
                </div>
                <div>
                  {' '}
                  <img src={logo[2]} alt='logo3' />
                </div>
                <div>
                  {' '}
                  <img src={logo[3]} alt='logo4' />
                </div>
                <div>
                  <img src={logo[4]} alt='logo5' />
                </div>
                <div>
                  <img src={logo[3]} alt='logo4' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero_heading
