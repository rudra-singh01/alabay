import Footer from "./Footer";
import Games from "./Games";
import HeroPhoto from "./HeroPhoto";
import Merchandice from "./Merchandice";
import ProjectVision from "./ProjectVision";
import RoadMap from "./RoadMap";
import Token from "./Token";

const HeroContent = () => {
  return (
    <div className="relative min-h-screen bg-white rounded-lg">
      <div className="relative">
        <div
        className="absolute inset-0 clip-path-polygon bg-gradient-to-b from-[#FFA800] to-[#FFF280] z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 43% 83%, 0 71%)  ",
        }}
      ></div>
      <div className="container relative p-10 z-10">
        {/* Centered line */}
        <div className="line_container sticky top-0 w-full flex items-center justify-center">
          <div className="line w-24 h-4 bg-[#ffffffb3] rounded-3xl mt-3"></div>
        </div>

        {/* Alabay Dog section */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-10 lg:pt-20">
          <div className="w-full lg:w-1/2">
            <img
              src="https://s3-alpha-sig.figma.com/img/0581/9154/369b463b9efe66ff3c4aa09e02e1bb96?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilYwdfCDOvXizNJeOyUTaX8tgJ28iDl06il5mtLkT1BQZvX-mtCEzMGHmpDKfpCGxsiUea2jWfNhI967Qv60YY8sgkfnSgisD2SYBMEwzZHi2nu39-vwrajCiS5ikfcZB17H4q6uEJ5vU-RjK6u2GnUKAQqO4yUbKb0Lko4ZeyEui59JsMq69~V2ZzSwzKuQGfswIdvtidUY5whffxFpO4EqpYfIJ2VR-4UVY4z07shjwhQwgnI4AIJg2fD9jIbNIsmRi2iDYatZcAz2M3iqKHTOtQQkZzt9hXFBZ~tG-ANvZPVi7In3OooJUl2xacNAng7hgxiGnF~ElpJS6H3s9w__"
              alt="Alabay Dog"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col text-left lg:text-right px-4 lg:px-10 pt-10 lg:pt-20">
            <h4 className="text-orange-400 font-bold text-3xl lg:text-4xl" style={{ fontFamily: 'sans-serif' }}>
              History of
            </h4>
            <h1 className="text-6xl lg:text-9xl text-white">
              ALABAY
            </h1>
            <p className="text-lg lg:text-[2.7vw] tracking-tight lg:tracking-tighter mt-4 lg:mt-6">
              The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Remaining Sections */}
      <div className="w-full flex flex-col min-h-screen bg-white">
        <HeroPhoto />
        <ProjectVision />
        <RoadMap />
        <div className="mt-[20vw] lg:mt-[10vw]">
          <Token />
        </div>
        <Merchandice />
        <Games />
        <Footer />
      </div>
    </div>
  );
};

export default HeroContent;
