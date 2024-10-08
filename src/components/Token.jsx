const Token = () => {
  return (
    <div className="w-full min-h-screen relative">
      <div
        className="absolute inset-0 clip-path-polygon bg-gradient-to-b from-[#FFF280] to-[#FFC700]"
        style={{
          clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 0 91%, 0 5%, 41% 3%)',
        }}
      ></div>

      <div className="container relative z-10 mx-auto py-16 px-6 md:px-8">
        <div className="heading mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-8xl text-white">TOKENOMICS</h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="left w-full lg:w-[45%] flex flex-col gap-8 items-center lg:items-start">
            {[
              { title: 'LOCKED', subtitle: 'LIQUIDITY' },
              { title: 'CONTRACT', subtitle: 'RENOUNCED' },
              { title: 'TAXES', subtitle: '0%' },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full lg:w-[30vw] px-6 py-4 bg-zinc-800 rounded-lg flex flex-col justify-center text-white text-center lg:text-left"
              >
                <h1 className="text-2xl md:text-3xl font-montserrat font-semibold">{item.title}</h1>
                <h5 className="text-4xl md:text-5xl font-montserrat font-semibold text-[#FFF280]">
                  {item.subtitle}
                </h5>
              </div>
            ))}
          </div>

          <div className="right w-full lg:w-[45%] flex items-center justify-center">
            <img
              className="w-full h-auto md:h-full object-cover rounded-lg"
              src="https://s3-alpha-sig.figma.com/img/03cd/4b54/f7b2756e20fd95b3b5f1eb746ece4610?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eevplk66bZzukgdgsIQfeVhiy7-gZcGK8Izvqu9NG92SSBLlIGeTgves80hfHWjC0weelLWpdva9M1QwzojGArCu0pNhcfCP1bWmhQjfyZ618DppeDSqLOUK1u0ihUtWBn8LGJUIstN6HScTvnEpuTyBakr1BrrKzDf7h912RqV4nfhy8QqpTgU~iVyacoiAp4KPKzGxVtt90cD1O2kDIO93bCsOcw6g~Zw0F7gu7TA0SsvENM4wk3UDCqhq~lJS07l9PouI6B3f7zIqcszsNZ0wzLp9tTGrQB1-rjs-Om5-ASaLUP1w236QKWUeqIBJOlvP22TFjW34X2F2N1OirA__"
              alt="Tokenomics"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
