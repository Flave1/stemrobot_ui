


const LearnMore = () => {
const logo = "assets/microchip.png"
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
      <div className=" lg:flex ">

        <div className=" flex  lg:w-[20%] ">
            <img src={logo} alt="" className="h-[40px] md:h-[50px]" />
            <h1 className=" font-bold text-4xl md:text-5xl">SIRIS.</h1>
        </div>

        <div className=" bg-slate-400 bg-opacity-20 lg:bg-none text-gray-300 lg:w-[80%]">
        <ul className=" md:flex md:text-center md:justify-center lg:text-right lg:float-right">
            <li className="px-4 pt-2 "><a href="">How it works</a></li>
            <li className="px-4 pt-2 "><a href="">Advantage</a></li>
            <li className="px-4 pt-2 "><a href="">Contact us</a></li>
            <li className="px-4 py-2 "><a href="">Free trail mobile SDK</a></li>
          </ul>
        </div>

      </div>

      {/* Hero section */}
     <div className="flex font-mono mt-8 md:mt-5 text-center md:text-left md:w-[100%] ">

     <div className="  text-gray-200 px-2 md:py-10 md:pt-20 md:w-[100%]">
        <h2 className="font-bold text-2xl lg:text-[40px] ">First AI based system for detecting the smartphone screen cracks</h2>
        <p className="py-5 md:py-8 lg:text-xl">
          SIRIS (Smartphone image Retrieval identificatin system) uses deep learning model to continously analyze data with a logic structure similar to how a human would draw conclusions
        </p>
        <h3 className="text-xl font-bold pb-2">Best for these indusstry</h3>
        <ul className="">
          <li className="pr-10 ">Smartphone Device insurance</li>
          <li className="">Telecom Supprting for Device tradein programs</li>
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
          <h1 className=" px-4 text-red-500 font-thin text-2xl">SIRIS</h1>
          <h1 className="text-black font-thin text-2xl">Works</h1>
      </div>
      <p className="text-black">AI Engine is built several deep learning models which crops validated and predicts the screen cracks  smartphones</p>
     </div>

    </div>

    





      </div>
    </div>
  );
};

export default LearnMore;