import Line from "../assets/Line";

const MyJourney = () => {
  return (
    <div className=" bg-black ">
          <div className=" relative flex items-center justify-center flex-col px-10 ">
            <div className="size-40 md:size-52 flex items-center justify-center z-10 text-custom-gradient border-4 hover:bg-white border-white rounded-full text-lg group">
              <p className=" text-lg bg-clip-text bg-gradient-to-r from-[#CD20A3] via-[#777EC4] to-[#0F8882] text-transparent transition-all ">

              MY JOURNEY
              </p>
            </div>
            <Line />

            {/* Graduate */}
            

          {/* First Job */}

            <div className="flex flex-row absolute space-x-10 justify-between top-[15%]  px-10  ">
            {/* Left Text Section */}
            <div className="flex flex-col w-1/4 justify-center">
              <h2 className="font-bold text-sm md:text-lg text-[#8A90CB] mb-4">College</h2>
              <p className="text-sm md:text-lg">NIT Patna.</p>
            </div>

            {/* Circle with "200" and Hover Effect */}
            <div className="bg-black hover:bg-white size-28 md:size-32 border-4 flex items-center  -mx-32 justify-center border-white rounded-full group">
              <p className="text-white text-2xl group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#CD20A3] via-[#777EC4] to-[#0F8882] group-hover:text-transparent transition-all ">
                2021
              </p>
            </div>

            {/* Right Text Section */}
            <div className="w-1/4 flex flex-col justify-center">
              <p className="text-sm md:text-base text-right">
                Joined NIT Patna for B.Tech in Electrical Engineering Department
              </p>
            </div>
            </div>

            {/* Second Job */}

            <div className="flex flex-row absolute space-x-10 justify-between top-[28%]  px-10 ">
            {/* Left Text Section */}
            <div className="flex flex-col w-1/4 justify-center">
              <h2 className="font-bold text-sm md:text-lg text-[#0F8882] mb-4">Hackathon</h2>
              <p className="text-sm md:text-lg">First Hackathon.</p>
            </div>

            {/* Circle with "200" and Hover Effect */}
            <div className="bg-black hover:bg-white size-28 md:size-32 border-4 flex items-center  -mx-32 justify-center border-white rounded-full group">
              <p className="text-white text-2xl group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#CD20A3] via-[#777EC4] to-[#0F8882] group-hover:text-transparent transition-all ">
                2022
              </p>
            </div>

            {/* Right Text Section */}
            <div className="w-1/4 flex flex-col justify-center">
              <p className="text-sm md:text-base text-right">
                Selected as top 10 team, was invited for offline participation
              </p>
            </div>
            </div>

            {/* Career Switch */}

            <div className="flex flex-row absolute justify-between top-[41%]  px-10  ">
            {/* Left Text Section */}
            <div className="flex flex-col w-1/4 justify-center">
              <h2 className="font-bold text-sm md:text-lg text-[#F8C7EC] mb-4">First Sponsered Trip</h2>
              <p className="text-sm md:text-lg">by Algorand Foundation.</p>
            </div>

            {/* Circle with "200" and Hover Effect */}
            <div className="bg-black hover:bg-white size-28 md:size-32 border-4 flex items-center  -mx-32 justify-center border-white rounded-full group">
              <p className="text-white text-2xl group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#CD20A3] via-[#777EC4] to-[#0F8882] group-hover:text-transparent transition-all ">
                2023
              </p>
            </div>

            {/* Right Text Section */}
            <div className="w-1/4 flex flex-col justify-center">
              <p className="text-sm md:text-base text-right">
                From whole college only I got selected for sponsered  trip to Algorand Immpact Summit at New Delhi.
              </p>
            </div>
            </div>

            {/* First Venture */}

            <div className="flex flex-row absolute space-x-0 justify-between top-[54%]  px-10 ">
            {/* Left Text Section */}
            <div className="flex flex-col w-1/4 justify-center">
              <h2 className="font-bold text-sm md:text-lg text-[#8A90CB] mb-4">Alumni Website</h2>
              <p className="text-sm md:text-lg">of NIT Patna.</p>
            </div>

            {/* Circle with "200" and Hover Effect */}
            <div className="bg-black hover:bg-white size-28 md:size-32 border-4 flex items-center  -mx-32 justify-center border-white rounded-full group">
              <p className="text-white text-2xl group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#CD20A3] via-[#777EC4] to-[#0F8882] group-hover:text-transparent transition-all ">
                2023
              </p>
            </div>

            {/* Right Text Section */}
            <div className="w-1/4 flex flex-col justify-center">
              <p className="text-sm md:text-base text-right">
                Builded Official Alumni website of college. Currently 21k+ visitors and 2k+ registration.
              </p>
            </div>
            </div>

              {/* Present */}

            <div className="flex flex-row absolute space-x-10 justify-between top-[67%]  px-10 ">
            {/* Left Text Section */}
            <div className="flex flex-col w-1/4 justify-center">
              <h2 className="font-bold text-sm md:text-lg text-[#19D6CD] mb-4">First Internship</h2>
              <p className="text-sm md:text-lg">as Frontend Developer.</p>
            </div>

            {/* Circle with "200" and Hover Effect */}
            <div className="bg-black hover:bg-white size-28 md:size-32 border-4 flex items-center  -mx-32 justify-center border-white rounded-full group">
              <p className="text-white text-2xl group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#CD20A3] via-[#777EC4] to-[#0F8882] group-hover:text-transparent transition-all ">
                2024
              </p>
            </div>

            {/* Right Text Section */}
            <div className="w-1/4 flex flex-col justify-center">
              <p className="text-sm md:text-base text-right">
                Completed my 2M internship at Build In Bharat Tech from Jun-Aug, 2024.
              </p>
            </div>
            </div>
            <div className="flex flex-row absolute space-x-10 justify-between top-[80%]  px-10 ">
            {/* Left Text Section */}
            <div className="flex flex-col w-1/4 justify-center">
              <h2 className="font-bold text-sm md:text-lg text-[#CD20A3] mb-4">Present</h2>
              <p className="text-sm md:text-lg">Open for any opportunity.</p>
            </div>

            {/* Circle with "200" and Hover Effect */}
            <div className="bg-black hover:bg-white size-28 md:size-32 border-4 flex items-center  -mx-32 justify-center border-white rounded-full group">
              <p className="text-white text-2xl group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#CD20A3] via-[#777EC4] to-[#0F8882] group-hover:text-transparent transition-all ">
                2024
              </p>
            </div>

            {/* Right Text Section */}
            <div className="w-1/4 flex flex-col justify-center">
              <p className="text-sm md:text-base text-right">
                Currently open for any opportunity in Web/Software Domain.
              </p>
            </div>
            </div>

          </div>
        </div>
  )
}

export default MyJourney