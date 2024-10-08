import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Games = () => {
  const img = [
    {
      url: "https://s3-alpha-sig.figma.com/img/17ad/b147/27a80e9f26b1592e8f58588da90159bc?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UFuKumYsUeZsSWFb~Jen5kYxXglroCLa57Ac1lebJwyA8V9wguPeoZsGx-UgQp-XTJk5YBjlt~j-9mOO~adK1EwjN4pIf9Oh4j-2KgpsNkpaUAiPtbMXH~LyY67FL9GSnJDCP31C4gPGrvDjUWC27cgmLncTevMQZrFKobjRzAWGhPsZHCT-yTUH~FhIby8dOONu9u3-dXngof7GrAmD0lfZRnzE6DA2UivoL9wBafQNf8oU7aL~TiYQo72y9jmyfjqhi8ANq0lX~zVh-awjSVfWdp9e9mr4IAXEbGNrvTelrzeIR9YVLqt4uKKOCVEOWCrRT34iIops7e7MpyPgEg__",
      btnColor: "#843AFC",
      links: "/game1",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/9ea3/c2a5/258e9acc950cdef2a23e058d05c99fd5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2ZtSZMtq87oU-xDZEgfe~ngWhCOn6K6OyHAjIJudqoYE5CadS0MrgBFiNUjZnFDgGRYZD4frEXa~A88lcBxbXniAnwuIRxwExdQSI1TUQqEOFCNGFG9Z~PEgAfUT52-Ax2qY6-LBj42LtVGMC-SkK2O4Cvi6vcfPn5LtuUIYxKipg~rEYw2OnUmQhODIg5rSd8e8WkK3LeJymeG4aKaaqxA7xNVNlTVAOoS~nnxlnFfXtPnL0CEUzupfA-fcicsNsnxYOaHtsKU2DIHEQWZjokx~4Yina8cgwgBTXuo9tFmj3SfuVMrc0ijXfmlH-FUAxhQGz7JDOxteYP5gSxTCg__",
      btnColor: "#45D689",
      links: "/game2",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? img.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === img.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.5s ease-in-out";
      containerRef.current.style.transform = `translateX(${
        -currentIndex * 100
      }%)`;
    }
  }, [currentIndex]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center mt-[10vw] relative">
      <div
        className="absolute inset-0 clip-path-polygon bg-gradient-to-b from-[#FFA800] to-[#FFF280] z-10"
        style={{
          clipPath:
            "polygon(47% 13%, 100% 0, 100% 50%, 100% 100%, 0 73%, 0 27%)",
        }}
      ></div>
      <div className="container w-full relative overflow-hidden p-2 z-10">
        <div className="heading p-2 px-8 mb-8 flex flex-col">
          <h1 className="text-8xl text-black text-center uppercase bg-gradient-to-b from-[#FFF280] to-[#FFA800] bg-clip-text text-transparent">
            Games
          </h1>
          <h4 className="capitalize text-center text-4xl">
            Stay tuned for more games
          </h4>
        </div>
        <div className="images w-full flex gap-2" ref={containerRef}>
          {img.map((item, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex items-center justify-center"
            >
              <div className="relative w-full h-[90vh] flex items-center justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={item.url}
                  alt={`Game ${index + 1}`}
                />
                <div className="absolute top-[85%] left-1/2 transform -translate-x-1/2">
                  <Link to="/game1">
                    <button
                      className="px-5 py-2 font-extrabold text-white rounded-lg"
                      style={{ backgroundColor: item.btnColor }}
                    >
                      Discover
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 top-[42%] -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={handlePrev}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 6L9 12L15 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          className="absolute right-4 top-[42%] -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={handleNext}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6L15 12L9 18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="preview p-2">
          <div className="top pt-10">
            <h1 className="text-5xl font-[900] font-montserrat text-[#FFA800]">
              GAME <span className="text-black font-montserrat">PREVIEW</span>
            </h1>
          </div>
          <div className="threeD flex items-center justify-center pt-10">
            <div className="container flex flex-col md:flex-row items-center gap-4 md:gap-2">
              <div className="one w-full md:w-[27%] rounded-lg h-[40vh] md:h-[44vh] bg-slate-600 overflow-hidden">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/0565/c51f/853323e69d9f16cea8f642ff8e3a86ba?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hy-OU6cCBd3Lz2taZLPM1Q7hlW8P3m9HCGAIxWvPkywCJSxkwI8zKXkRw82Jo5dRdPSwskYxUkQbG~hrosVIDisbaEEDHfyBgzPxLqaO8Z-zqHjYf0Pi2ogQd6wvH6eSoU3qFw3kFd6c6z-hxeJfeYCZ0~CDIMp3bSli71lYN43ovB38pRF5qV-90Q91oPrn5ERqmzB5aWO~lwTDn8U65R0i8tXvQISxQaIPpHcrbcJ~hkwNDEFxvLGlLB2MCj59yS1QhlOCnRxVSY-Dh3Ch68Xq~zFKMfgiG6w7eOXabT8xjEfgnP3dc3ZxGFPYGYddpw169lMnBImGoV9iP7VV4g__"
                  alt=""
                />
              </div>
              <div className="one w-full md:w-[27%] rounded-lg h-[40vh] md:h-[44vh] bg-slate-600 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://s3-alpha-sig.figma.com/img/1243/de2a/2f35b2812077928282c36cd1462a700e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iyvgJ1OWA7cdyp1o5IMBYd76bwz3HhepxzLTtpV~pzqs-lWhTL85DRgx0E41Ywb32eYs6fe1~6hWa5ObLjW5zerXyvZk65EUVe5tPrtQjP47o1QxcMWHECqFmB4LInGl9oOG07Rw5G6NfE1TMWuI~1AEB6PKtzqN2sJP30w-E0I8djYWNPU3iFGyt4ekcurY66bq6X9ddrs2pQgYqv~WmMutN79HwypFeNaCOG2xTFtWQ0c2vCpInapXHAv2EQQSRIQn2ldf5byKWcd-rEz69Tq~UaaxQ24iWCZbFx5I4FwIBp9Jnxyu-vexD-ttEyuc~TBanfNqPp2c8rqmdLJ1hQ__"
                  alt=""
                />
              </div>
              <div className="one w-full md:w-[27%] rounded-lg h-[40vh] md:h-[44vh] bg-slate-600 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://s3-alpha-sig.figma.com/img/6394/0394/a9cc88bd7bb13d9606f8b43ca3f22818?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ea6TS0t1eSKUsbWuJ-DnkQQZV-LEBJH22Sc5xhebedTLfEyfpg2bWQe-etjzOxiht5nWE5ugu8ZtKrnZpB7u4HlzKQLqtij925O0iRbDYEe07iB~aD0GCV~Z5myWE0VpnQ-ddzBSNH0aqAfgTN0BE0Edy1yRi5YQdHUPw5t-O8Dgtjq8OK~hrltX1HRkBQ2-VRla0upI8SVkxUJqXIwBU6gSQwM5z-CgdcPk-r6m6dCBIZZinZQ63Px4AQE~BdX1d~ltp5UU4YnybFBgmY5UtvEvS0WBZVm9VmRvrHMNWnCkAKkfOpzIgigfpfyxPEC349hXwdMCRfOc8NI-JaHqpg__"
                  alt=""
                />
              </div>
            </div>

            <div className="right hidden md:block absolute w-8 h-8 right-[5%] top-[85.5%] transform -translate-y-1/2 cursor-pointer">
              <svg
                className="w-11 cursor-pointer"
                viewBox="0 0 159 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_21_87)">
                  <rect
                    x="11"
                    y="10"
                    width="121"
                    height="172"
                    rx="33.8647"
                    fill="#353535"
                  />
                </g>
                <mask
                  id="path-2-outside-1_21_87"
                  maskUnits="userSpaceOnUse"
                  x="30.3984"
                  y="61.3877"
                  width="80"
                  height="69"
                  fill="black"
                >
                  <rect
                    fill="white"
                    x="30.3984"
                    y="61.3877"
                    width="80"
                    height="69"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M69.9453 69.5141C72.7805 66.6789 77.3772 66.6789 80.2125 69.5141L100.792 90.0941C100.927 90.2289 101.056 90.3676 101.178 90.51C102.733 91.8416 103.718 93.8193 103.718 96.0272C103.718 97.2022 103.439 98.3121 102.944 99.294C102.591 100.105 102.083 100.865 101.419 101.528L80.8394 122.108C78.0042 124.943 73.4074 124.943 70.5722 122.108C67.737 119.273 67.737 114.676 70.5722 111.841L79.1258 103.287H43.6584C39.6488 103.287 36.3984 100.037 36.3984 96.0272C36.3984 92.0176 39.6488 88.7672 43.6584 88.7672H78.9312L69.9453 79.7813C67.1101 76.9461 67.1101 72.3493 69.9453 69.5141Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M69.9453 69.5141C72.7805 66.6789 77.3772 66.6789 80.2125 69.5141L100.792 90.0941C100.927 90.2289 101.056 90.3676 101.178 90.51C102.733 91.8416 103.718 93.8193 103.718 96.0272C103.718 97.2022 103.439 98.3121 102.944 99.294C102.591 100.105 102.083 100.865 101.419 101.528L80.8394 122.108C78.0042 124.943 73.4074 124.943 70.5722 122.108C67.737 119.273 67.737 114.676 70.5722 111.841L79.1258 103.287H43.6584C39.6488 103.287 36.3984 100.037 36.3984 96.0272C36.3984 92.0176 39.6488 88.7672 43.6584 88.7672H78.9312L69.9453 79.7813C67.1101 76.9461 67.1101 72.3493 69.9453 69.5141Z"
                  fill="white"
                />
                <path
                  d="M80.2125 69.5141L84.4551 65.2715V65.2715L80.2125 69.5141ZM69.9453 69.5141L74.1879 73.7567V73.7567L69.9453 69.5141ZM100.792 90.0941L96.5498 94.3367L96.5498 94.3367L100.792 90.0941ZM101.178 90.51L96.6211 94.4137L96.923 94.766L97.2754 95.0678L101.178 90.51ZM102.944 99.294L97.5873 96.5905L97.5103 96.7431L97.4421 96.8998L102.944 99.294ZM101.419 101.528L97.1767 97.2854L101.419 101.528ZM80.8394 122.108L85.082 126.351L80.8394 122.108ZM79.1258 103.287L83.3684 107.53L93.6111 97.2872H79.1258V103.287ZM78.9312 88.7672V94.7672H93.4165L83.1738 84.5246L78.9312 88.7672ZM69.9453 79.7813L74.1879 75.5386L69.9453 79.7813ZM84.4551 65.2715C79.2767 60.0931 70.881 60.0931 65.7026 65.2715L74.1879 73.7567C74.68 73.2647 75.4778 73.2647 75.9698 73.7567L84.4551 65.2715ZM105.035 85.8514L84.4551 65.2715L75.9698 73.7567L96.5498 94.3367L105.035 85.8514ZM105.734 86.6064C105.512 86.3472 105.279 86.0953 105.035 85.8514L96.5498 94.3367C96.5755 94.3624 96.5992 94.3881 96.6211 94.4137L105.734 86.6064ZM109.718 96.0272C109.718 91.9931 107.91 88.3751 105.08 85.9523L97.2754 95.0678C97.5561 95.3081 97.7185 95.6454 97.7185 96.0272H109.718ZM108.3 101.997C109.209 100.196 109.718 98.1626 109.718 96.0272H97.7185C97.7185 96.2419 97.6694 96.4278 97.5873 96.5905L108.3 101.997ZM105.662 105.771C106.866 104.567 107.797 103.178 108.445 101.688L97.4421 96.8998C97.3844 97.0325 97.2996 97.1625 97.1767 97.2854L105.662 105.771ZM85.082 126.351L105.662 105.771L97.1767 97.2854L76.5968 117.865L85.082 126.351ZM66.3296 126.351C71.5079 131.529 79.9037 131.529 85.082 126.351L76.5968 117.865C76.1047 118.357 75.3069 118.357 74.8149 117.865L66.3296 126.351ZM66.3296 107.598C61.1512 112.777 61.1512 121.172 66.3296 126.351L74.8149 117.865C74.3228 117.373 74.3228 116.576 74.8148 116.083L66.3296 107.598ZM74.8832 99.0446L66.3296 107.598L74.8148 116.083L83.3684 107.53L74.8832 99.0446ZM43.6584 109.287H79.1258V97.2872H43.6584V109.287ZM30.3984 96.0272C30.3984 103.351 36.3351 109.287 43.6584 109.287V97.2872C42.9626 97.2872 42.3984 96.7231 42.3984 96.0272H30.3984ZM43.6584 82.7672C36.3351 82.7672 30.3984 88.7039 30.3984 96.0272H42.3984C42.3984 95.3313 42.9626 94.7672 43.6584 94.7672V82.7672ZM78.9312 82.7672H43.6584V94.7672H78.9312V82.7672ZM65.7026 84.0239L74.6886 93.0099L83.1738 84.5246L74.1879 75.5386L65.7026 84.0239ZM65.7026 65.2715C60.5243 70.4498 60.5243 78.8456 65.7026 84.0239L74.1879 75.5386C73.6958 75.0466 73.6958 74.2488 74.1879 73.7567L65.7026 65.2715Z"
                  fill="#353535"
                  mask="url(#path-2-outside-1_21_87)"
                />
                <defs>
                  <filter
                    id="filter0_d_21_87"
                    x="0"
                    y="0"
                    width="159"
                    height="210"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="8" dy="9" />
                    <feGaussianBlur stdDeviation="9.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_21_87"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_21_87"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
