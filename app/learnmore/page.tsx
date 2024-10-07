


const LearnMore = () => {
const logo = "assets/microchip.png"
const appleIcon = "assets/apple-logo.png"
const phoneIcon = "assets/iphone-x-removebg-preview.png"
const playIcon = "assets/play.png"
const tripleCircle = "assets/three-rings.png"
  

  return (
    <div className="  h-screen">
      {/* diagonal/gradian red color background */}
      <div className=" absolute z-[-10] h-[90%] bg-opacity-80  w-full bg-gradient-to-t from-red-800 diagonal-cut to-red-400 "></div>

      <div className="h-full  w-full pl-20 pr-20 pt-5 text-white">

        {/* Navbar section */}
      <div className=" md:flex ">
        <div className=" md:flex w-[40%] ">
            <img src={logo} alt="" className="h-[50px]" />
            <h1 className="mt-1 font-bold text-5xl">SIRIS.</h1>
            <img src={logo} alt="" className="h-[30px] mt-4" />
        </div>

        <div className="  w-[60%] text-gray-300">
        <ul className="  pt-4   text-right flex float-right">
            <li className="px-4 "><a href="">How it works</a></li>
            <li className="px-4 "><a href="">Advantage</a></li>
            <li className="px-4 "><a href="">Free trail mobile SDK</a></li>
            <li className="px-4 "><a href="">Contact us</a></li>
          </ul>
        </div>

      </div>

      {/* Hero section */}
     <div className="flex  font-mono">

     <div className=" xl:w-[60%]  text-gray-300 xl:pt-20  ">
        <h2 className="font-bold text-[40px]">First AI based system for detecting the smartphone screen cracks</h2>
        <p className="py-5 text-xl">
          SIRIS (Smartphone image Retrieval identificatin system) uses deep learning model to continously analyze data with a logic structure similar to how a human would draw conclusions
        </p>
        <h3 className="text-xl font-bold pb-2">Best for these indusstry</h3>
        <ul className="flex">
          <li className="pr-10 text-xl">Smartphone Device insurance</li>
          <li className="text-xl">Telecom Supprting for Device tradein programs</li>
        </ul>

        {/* Hero Buttons */}
       <div className="mt-10 flex">
       <button className=" flex px-4 mr-4 bg-[#2e2d2d] rounded-lg">
          <div className="mr-4">
          <img src={tripleCircle} alt="" className="h-[35px] mt-1" />
          </div>
          <div >
            <p className="text-[13px]">Request for</p>
            <div className="flex">
              <h2 className="pr-[5px] font-bold text-xl">Mobile</h2>
              <p className="text-xl text-gray-300">SDK</p>
            </div>
          </div>
        </button>

        <button className=" flex px-4 bg-[#2e2d2d] rounded-lg">
          <div className="mr-4 flex">
          <img src={appleIcon} alt="" className="h-[30px] mt-1" />
          <h1 className="font-bold text-3xl mt-1">/</h1>
          <img src={playIcon} alt="" className="h-[35px] mt-1" />
          </div>
          <div >
            <p className="text-[13px]">Request for</p>
            <div className="flex">
              <h2 className="pr-[5px] font-bold text-xl">Demo</h2>
              <p className="text-xl text-gray-300">App</p>
            </div>
          </div>
        </button>

      </div>

      {/* backgroung box */}
        <div className="w-[25%] h-[160px]  bg-white bg-opacity-10 relative mt-[-80px] z-[-10] ml-[40%]"></div>
        <div className="w-[80%] bg-opacity-10 h-[150px]  bg-white mt-[-120px] ml-[46%]"></div>
     </div>

     {/* Phone image */}
     <div className=" w-[40%] mt-10 h-[600px]">
     <img src={phoneIcon} alt="" className="h-[100%] " />
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