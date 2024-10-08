const RoadMap = () => {
  const stages = [
    {
      title: "Community Building and Initial Launch",
      image: "https://s3-alpha-sig.figma.com/img/8939/169b/3264be2fc34055c0ea3455106a049d65?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NufpAzHpFJoynvEcBji-2572PQr8KMmUQJlV9gME3uJX69Z2sPyMkSLchYrmAXuBmam3jLM7ASxYrM9qkzHnowVa5KGJCSVgpYq0f3KVLbceUj~Udz1cFZ~Sd8ApkyVOkAWTG-fRl6iu8xjy0Cxs3PFM0T6CYQpenzCr-W0iRQrwHaBxpJc9u4WwHzU8sdw38J~4ljjWyHA5S6-3C-JWsMq5lb9t9OJJLj7WnbIFFOF8KBVuFLVaba0SXny2cNxo0XQUX9IvC76PpF6yL9QSxecawPlNY0Hms8YTazunyYbz-H4n~OVxjEVWSkQIOtZyH-rxMcH1RjMr66vWIbCmkw__",
      color: "bg-[linear-gradient(180deg,_#DBC70C_0%,_rgba(255,_242,_128,_0)_100%)]",
    },
    {
      title: "Merchandise Store Launch",
      image: "https://s3-alpha-sig.figma.com/img/90dc/d663/fbb79b9cbd2c40541b75be27289b37dc?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OIPLrPRhIok6aJPXpsqTeBlbQ2qfeNLOyIrBBlm02f3z0byTR-O5RwqXkr6~rawOh1tD9xfjz6l63t1IvW5tGuEtLXbVIOZ3SdLhuMouHxUe54w83lVJPbrkfCkr8Sw2k5qo1x~G9W1XMIU28h2-PsJRBTsPjRa4yhVsNA17K6yGYMFcR5XAdf-~EnPKztrTSBSd1DHT~dy3tBVDkaciVvstUBIziVWOkMzu-LEndHRbggfCtgXOiWsEp1~F6t~4YM9yKk9RVUeAgni7GtEIpo4u-XukTcykZO2B2wJl8D7Gf~xTU-AfZ6Fukxo7cGI2xRHuXuQXTMC-OTa6po1jrg__",
      color: "bg-[linear-gradient(180deg,_#00D4D4_0%,_rgba(65,_255,_255,_0)_100%)]",
    },
    {
      title: "Community Events and contests",
      image: "https://s3-alpha-sig.figma.com/img/379c/e90b/d2717004bc2943079f083b0e8492259d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bwqUkdxIOmhupYq6hivLjjxaHMSqoIxcKSpyt1w7DGaxpBS16nF0t1hT4p0jluflrBd2vDD1aS9zNXV9N67NkUzKcRBYcTW41gDa1rl61qDmZ0JTUD3ZZTXO6DwSxjI0kVBWU1vFcbrgDzDNFnRrqBJiBjGU9YB5nn~UQXnkNKiyUDVYx7302Ak4Hp4gRLX6mSGpmpP0FLUN4V7yO87oXLsr0ZijdOBNbUnK7xlmNXf79MaVEJ0YOmPfyIJtLnS~EodDNCCTbDB7Lf~5TyrqzxFwOq~XeW0X9cu~Z6aIWjLVSanH3~HrRwo7KquQmGeKHTLd6YDBT2zcxiG1EVxVZQ__",
      color: "bg-[linear-gradient(180deg,_#D427FF_0%,_rgba(212,_39,_255,_0)_100%)]",
    },
    {
      title: "Expansion and New Features",
      image: "https://s3-alpha-sig.figma.com/img/8e49/2ff4/037808c30796cc70f3b8d9a154f5d4c7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ThnCMnkTi7MTbqTERA2cPJ6b3yJSvMnxQyYShKQB3X7KwHTTpkx0Tbpa-eniSc45HxNgJsAyCZ74o6ILQubo6BjOvr-Eq~rX3Aeobn2qv8g-bNVxVLoxBkhgD4ILRVKASjCJsNpzbw2Fl5yGEo8xapkeHJxOdqYahADgBR5pCksl1ohPXKLyeYN8XQS7aIz76cx7XxDcSxbLkDD9LdYEEro0TTDsVLGLig0psaPAWwcg2iS2sr-vxGvOPyhn7YeVjoeKCEcPLg51ZilCyWTYszkZ57PFD4PRuEQHRf1xidiICn-dBjestuUU94wKTdPpEplSGsPG6Pgg3m5~~jkY4g__",
      color: "bg-[linear-gradient(179.53deg,_#8F3A3C_0.41%,_rgba(143,_58,_60,_0)_95.85%)]",
    },
  ];

  return (
    <div className="w-full min-h-screen relative">
    <div
      className="absolute inset-0 clip-path-polygon bg-gradient-to-b from-[#FFA800] to-[#FFF280] z-10"
      style={{
        clipPath: "polygon(100% 0%, 100% 50%, 100% 68%, 0 28%, 0 26%, 0 0)",
      }}
    ></div>
    <div className="container relative flex flex-col z-10">
      <div className="heading p-2 px-8">
        <h1 className="text-6xl md:text-6xl lg:text-8xl text-white">Road map</h1>
      </div>
  
      {/* Main Content */}
      <div className="big_div w-full h-[90vh] flex flex-col lg:flex-row items-center justify-between pt-10 lg:pt-20">
        {/* First Section */}
        <div className="first w-full lg:w-[50%] h-full flex flex-col items-center justify-center text-left px-5 md:px-10 gap-5 lg:gap-10">
          <p className="text-xl md:text-[1.5vw] lg:text-[2vw] font-extrabold font-poppins text-center lg:text-left">
            Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.
            <span className="inline-block pt-5 lg:pt-10 text-lg md:text-[1.5vw] lg:text-[1.9vw] text-[#906715] md:text-[#FFA800] font-extrabold font-poppins">
              Join us as we grow and achieve new heights.
            </span>
          </p>
        </div>
  
        {/* Second Section (Image) */}
        <div className="second w-full lg:w-[50%] h-[50vh] lg:h-full flex items-center justify-center">
  <div className="pic w-[80%] md:w-full h-full lg:h-[100vh]"> {/* Increase height on desktop */}
    <img
      className="w-full h-full object-cover"
      src="https://s3-alpha-sig.figma.com/img/8af3/96f7/cd09a6d1e8a5d28e3a24eba452812d8b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fjKSV4uCQou3FGFxsFLF7kje-YRwUzpEa8T8E6GesiY9BMm8TTTfE~8wAGfsPkbYJSDeOpOoc89lpGsjGlPlQAU7BSxDMuIkFPwU8QDFSOpEqPG4f5LEItiLCzun9Op7AuDyz5~X~QuvjMD363KIwd3KOYMtX8YEI9ul0NHc~viKeQDz2TJJbxjnbgf4~O~VbhaRGIvaWel2M3bgdF6-dyaIhcbbhbQ~endNfyxiZO1kGoUGeQ0HUuFvHFS-8rL9BuHkVeRAFc1okw80Xgh1sMtWaWANnxACPVJFPrbkcH0KcuDsMuaTAHvs5qWI8G2kBzNDbthXgTN3icMlt1Z7CA__"
      alt="Roadmap"
    />
  </div>
</div>
      </div>
  
      {/* Bottom Container */}
      <div className="bottom-container mt-12 px-4 sm:px-6 lg:px-32 w-full">
        <div className="grid gap-4 md:gap-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`${stage.color} rounded-xl shadow-lg flex flex-col items-center justify-center p-6 md:p-8`}
            >
              <h3 className="text-lg md:text-xl font-bold text-center font-montserrat">
                {stage.title}
              </h3>
              <img
                src={stage.image}
                alt={stage.title}
                className="w-auto h-[25vw] md:h-[15vw] mb-4 rounded-lg object-cover mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
};


export default RoadMap;
