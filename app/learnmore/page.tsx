import Navbar from "../components/Navbar";



const LearnMore = () => {
  const appleIcon = "assets/apple-logo.png"
  const phoneIcon = "assets/iphone-x-removebg-preview.png"
  const playIcon = "assets/play.png"
  const tripleCircle = "assets/three-rings.png"


  return (
    <div className="  h-screen ">
      {/* diagonal/gradian red color background */}
      <div className=" absolute z-[-10] h-[80%] md:h-[70%] lg:h-[50%] xl:h-[40%] 2xl:h-[85%] bg-opacity-80  w-full diagonal-cut bg-gradient-to-t from-red-800 to-red-400"></div>

      <div className="h-full w-full md:px-5 xl:px-20 pt-5 text-white">

        {/* Navbar section */}
        <Navbar />

        {/* Hero section */}
        <div className="flex font-mono mt-8 md:mt-5 text-center md:text-left md:w-[100%] ">

          <div className="  text-gray-200 px-2 md:py-10 md:pt-20 md:w-[100%]">
            <h2 className="font-bold text-2xl lg:text-[40px] ">Stembots AI Trader: Mastering the Markets with Intelligent Precision
            </h2>
            <p className="py-5 md:py-8 lg:text-xl">
              Stembots AI Trader merges cutting-edge artificial intelligence with advanced human-like strategies,
              analyzing and adapting to market conditions in real-time to make high-precision trades.
              It manages risk, monitors capital, and ensures optimal trading performance for every market condition.
            </p>
            <h3 className="text-xl font-bold pb-2">Best for these industry</h3>
            <ul className="">
              <li className="pr-10 ">Advanced Risk Management Solutions</li>
              <li className="">Customizable Trading Strategies</li>
              <li className="">Real-time Market Trend Analysis</li>
            </ul>

            {/* Hero Buttons */}
            <div className="mt-10 md:mt-10 flex justify-center mx-auto md:justify-normal">
              <button className=" flex px-4 mr-4 bg-[#2e2d2d] rounded-lg">
                <div className="mr-4">
                  <img src={tripleCircle} alt="" className="h-[35px] mt-1" />
                </div>
                <div >
                  <p className="text-[13px]">Request for</p>
                  <div className="flex">
                    <h2 className="pr-[5px] font-bold md:text-xl">Mobile</h2>
                    <p className=" md:text-xl text-gray-300">SDK</p>
                  </div>
                </div>
              </button>

              <button className=" flex bg-[#2e2d2d] px-1 rounded-lg">
                <div className="mr-2 w-[45%] flex">
                  <img src={appleIcon} alt="" className="h-[30px] mt-1" />
                  <h1 className="font-bold text-3xl mt-1">/</h1>
                  <img src={playIcon} alt="" className="h-[35px] mt-1" />
                </div>
                <div className="" >
                  <p className="text-[13px]">Request for</p>
                  <div className="flex">
                    <h2 className="pr-[5px] font-bold md:text-xl">Demo</h2>
                    <p className="md:text-xl text-gray-300">App</p>
                  </div>
                </div>
              </button>

            </div>

            {/* backgroung box */}
            <div className="hidden lg:block w-[25%] h-[160px]  bg-[#bba5a5] bg-opacity-10 relative mt-[-80px] z-[-10] ml-[40%]"></div>
            <div className="hidden lg:block w-[80%] bg-opacity-10 h-[150px]  bg-[#bba5a5] mt-[-120px] ml-[46%]"></div>
          </div>

          {/* Phone image */}
          <div className="hidden  md:block 2xl:w-[600px] ">
            <img src={phoneIcon} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className=" p-20">
          <div className=" text-center  mx-auto">
            <div className="flex text-center mx-auto justify-center">
              <h1 className="text-black font-thin text-2xl">How</h1>
              <h1 className=" px-4 text-red-500 font-thin text-2xl">STEMBOTS</h1>
              <h1 className="text-black font-thin text-2xl">Works</h1>
            </div>
            <p className="text-black">
            With proprietary AI algorithms, Stembots continuously learns from market data,
              predicting trends and automating trades. It is built for adaptability, efficiently executing trades, managing risks, and
              making calculated decisions under any market condition.
              </p>
          </div>

        </div>







      </div>
    </div>
  );
};

export default LearnMore;