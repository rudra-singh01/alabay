import HeroContent from "./HeroContent";

const HeroSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="fixed">
        {/* Background Image */}
        <div className="img absolute w-full h-screen">
          <img
            className="w-full h-full object-cover"
            src="https://s3-alpha-sig.figma.com/img/6648/fff9/2dd3d3ca2ea2c2dede710d01d49c2ad1?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=frX1perr8lzVpKE3hjUCS-dcXyObiNPO8tcZCbClKqLDINm1Pz~igFj831~PLFMVfGBgysaBS5yJ2rPQg5OoNH73rx9ie0i34EqyvwTfW4kkqHbiDfrOOW70DyHWO3lN3GQfR5BaFw-UF0GiO6OKlh87DNPPUGElcqovXPzeaWEyvH0bPUtMYal-tzHVsMsGXETo9-EAO96PdJdcpFVHNE67BkjEbLMtreRyyxco4y2I3WrEq9oH16I7JAXU-778wQnCv1B~suxb~wu37rK0eF1jAhnLVLT0R71aN-LkCgmhTGxMx4NWStlUPD8pQvRXKcpdk8CQVd1JJ4rKIW5v5g__"
            alt="Background"
          />
        </div>

        {/* Title Section */}
        <h1
          className="relative text-center text-[12vw] lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF280] to-[#7EFF5E] 
        drop-shadow-[10px_10px_0px_#000000] uppercase"
        >
          welcome to alabay world
        </h1>

        {/* Paragraph Section */}
        <div className="relative tracking-tighter para w-full h-[34vh] bg-zinc-800 mt-[30vw] lg:mt-[15vw] flex items-center justify-center">
          <p className="text-[7vw] lg:text-5xl text-center text-white w-[90%] lg:w-[75%] px-4">
            where the{" "}
            <span className="bg-gradient-to-b from-[#FFF280] to-[#FFA800] bg-clip-text text-transparent">
              legendary Central Asian Shepherd Dog
            </span>{" "}
            meets a new-age adventure.{" "}
            <span className="bg-gradient-to-b from-[#FFF280] to-[#FFA800] bg-clip-text text-transparent">
              Join us
            </span>{" "}
            in celebrating the{" "}
            <span className="bg-gradient-to-b from-[#FFF280] to-[#FFA800] bg-clip-text text-transparent">
              strength
            </span>
            ,{" "}
            <span className="bg-gradient-to-b from-[#FFF280] to-[#FFA800] bg-clip-text text-transparent">
              loyalty
            </span>
            , and{" "}
            <span className="bg-gradient-to-b from-[#FFF280] to-[#FFA800] bg-clip-text text-transparent">
              heritage
            </span>{" "}
            of the Alabay breed
            
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex items-center justify-center mt-[150vw] lg:mt-[40vw] ">
        <div className="hero_content w-[95%] md:w-[80%] sticky top-20">
          <HeroContent />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
