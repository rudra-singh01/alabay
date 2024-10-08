import { useState } from "react";

const HeroPhoto = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const mediaItems = [
    { type: "photo", title: "Photo 1" },
    { type: "photo", title: "Photo 2" },
    { type: "video", title: "Video 1" },
    { type: "video", title: "Video 2" },
    { type: "photo", title: "Photo 3" },
    { type: "video", title: "Video 3" },
    { type: "photo", title: "Photo 4" },
    { type: "video", title: "Video 4" },
  ];

  const displayedItems =
    selectedCategory === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.type === selectedCategory);

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const scrollLeft = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const scrollRight = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, displayedItems.length - itemsPerPage)
    );
  };

  const currentItems = displayedItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full h-full">
      <div className="container flex flex-col items-center justify-center gap-10">
        <div className="upper flex pt-10 gap-10">
          <h5
            className={`text-center text-black font-extrabold text-xl cursor-pointer font-poppins ${
              selectedCategory === "all" ? "underline text-[#FFA800]" : "hover:text-[#FFA800]"
            }`}
            onClick={() => {
              setSelectedCategory("all");
              setStartIndex(0);
            }}
          >
            All
          </h5>
          <h5
            className={`text-center text-black font-bold text-xl cursor-pointer font-poppins ${
              selectedCategory === "photo" ? "underline text-[#FFA800]" : "hover:text-[#FFA800]"
            }`}
            onClick={() => {
              setSelectedCategory("photo");
              setStartIndex(0);
            }}
          >
            Photo
          </h5>
          <h5
            className={`text-center text-black font-bold text-xl cursor-pointer font-poppins ${
              selectedCategory === "video" ? "underline text-[#FFA800]" : "hover:text-[#FFA800]"
            }`}
            onClick={() => {
              setSelectedCategory("video");
              setStartIndex(0);
            }}
          >
            Video
          </h5>
        </div>

        {/* Media Items Carousel */}
        <div className="lower flex justify-center gap-4 relative w-full items-center">
          {/* Left Arrow (disable if at the start) */}
          {startIndex > 0 && (
             <div
             className="left absolute hidden md:block w-8 h-8 left-[5%] top-1/2 transform -translate-y-1/2 cursor-pointer"
             onClick={scrollLeft}
           >
             <svg
             className="w-11 cursor-pointer"
               viewBox="0 0 159 210"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <g filter="url(#filter0_d_25_179)">
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
                 id="path-2-outside-1_25_179"
                 maskUnits="userSpaceOnUse"
                 x="29.7188"
                 y="61.3877"
                 width="80"
                 height="69"
                 fill="black"
               >
                 <rect
                   fill="white"
                   x="29.7188"
                   y="61.3877"
                   width="80"
                   height="69"
                 />
                 <path
                   fillRule="evenodd"
                   clipRule="evenodd"
                   d="M70.1719 69.5141C67.3367 66.6789 62.7399 66.6789 59.9047 69.5141L39.3248 90.0941C39.19 90.2289 39.0616 90.3677 38.9396 90.5101C37.3843 91.8416 36.3987 93.8193 36.3987 96.0273C36.3987 97.2023 36.6779 98.3121 37.1735 99.294C37.5264 100.105 38.0345 100.865 38.6978 101.528L59.2778 122.108C62.113 124.943 66.7098 124.943 69.545 122.108C72.3802 119.273 72.3802 114.676 69.545 111.841L60.9914 103.287H96.4588C100.468 103.287 103.719 100.037 103.719 96.0273C103.719 92.0177 100.468 88.7673 96.4588 88.7673H61.186L70.1719 79.7813C73.0071 76.9461 73.0071 72.3494 70.1719 69.5141Z"
                 />
               </mask>
               <path
                 fillRule="evenodd"
                 clipRule="evenodd"
                 d="M70.1719 69.5141C67.3367 66.6789 62.7399 66.6789 59.9047 69.5141L39.3248 90.0941C39.19 90.2289 39.0616 90.3677 38.9396 90.5101C37.3843 91.8416 36.3987 93.8193 36.3987 96.0273C36.3987 97.2023 36.6779 98.3121 37.1735 99.294C37.5264 100.105 38.0345 100.865 38.6978 101.528L59.2778 122.108C62.113 124.943 66.7098 124.943 69.545 122.108C72.3802 119.273 72.3802 114.676 69.545 111.841L60.9914 103.287H96.4588C100.468 103.287 103.719 100.037 103.719 96.0273C103.719 92.0177 100.468 88.7673 96.4588 88.7673H61.186L70.1719 79.7813C73.0071 76.9461 73.0071 72.3494 70.1719 69.5141Z"
                 fill="white"
               />
               <path
                 d="M59.9047 69.5141L55.6621 65.2715V65.2715L59.9047 69.5141ZM70.1719 69.5141L65.9293 73.7568L70.1719 69.5141ZM39.3248 90.0941L43.5674 94.3368L43.5674 94.3368L39.3248 90.0941ZM38.9396 90.5101L43.4961 94.4137L43.1942 94.7661L42.8417 95.0679L38.9396 90.5101ZM37.1735 99.294L42.5299 96.5906L42.6069 96.7432L42.6751 96.8999L37.1735 99.294ZM38.6978 101.528L42.9405 97.2854V97.2854L38.6978 101.528ZM59.2778 122.108L55.0351 126.351L59.2778 122.108ZM60.9914 103.287L56.7487 107.53L46.5061 97.2873H60.9914V103.287ZM61.186 88.7673V94.7673H46.7007L56.9433 84.5246L61.186 88.7673ZM70.1719 79.7813L65.9293 75.5387L70.1719 79.7813ZM55.6621 65.2715C60.8404 60.0932 69.2362 60.0932 74.4146 65.2715L65.9293 73.7568C65.4372 73.2647 64.6394 73.2647 64.1474 73.7568L55.6621 65.2715ZM35.0821 85.8515L55.6621 65.2715L64.1474 73.7568L43.5674 94.3368L35.0821 85.8515ZM34.3831 86.6064C34.6052 86.3472 34.8383 86.0953 35.0822 85.8514L43.5674 94.3368C43.5417 94.3625 43.518 94.3882 43.4961 94.4137L34.3831 86.6064ZM30.3987 96.0273C30.3987 91.9932 32.2075 88.3751 35.0375 85.9523L42.8417 95.0679C42.5611 95.3081 42.3987 95.6455 42.3987 96.0273H30.3987ZM31.817 101.997C30.908 100.196 30.3987 98.1626 30.3987 96.0273H42.3987C42.3987 96.242 42.4478 96.4279 42.5299 96.5906L31.817 101.997ZM34.4552 105.771C33.2515 104.567 32.32 103.178 31.6718 101.688L42.6751 96.8999C42.7328 97.0325 42.8176 97.1625 42.9405 97.2854L34.4552 105.771ZM55.0351 126.351L34.4552 105.771L42.9405 97.2854L63.5204 117.865L55.0351 126.351ZM73.7876 126.351C68.6093 131.529 60.2135 131.529 55.0351 126.351L63.5204 117.865C64.0125 118.357 64.8103 118.357 65.3023 117.865L73.7876 126.351ZM73.7876 107.598C78.966 112.777 78.966 121.172 73.7876 126.351L65.3023 117.865C65.7944 117.373 65.7944 116.576 65.3023 116.084L73.7876 107.598ZM65.234 99.0446L73.7876 107.598L65.3023 116.084L56.7487 107.53L65.234 99.0446ZM96.4588 109.287H60.9914V97.2873H96.4588V109.287ZM109.719 96.0273C109.719 103.351 103.782 109.287 96.4588 109.287V97.2873C97.1546 97.2873 97.7188 96.7232 97.7188 96.0273H109.719ZM96.4588 82.7673C103.782 82.7673 109.719 88.704 109.719 96.0273H97.7188C97.7188 95.3314 97.1546 94.7673 96.4588 94.7673V82.7673ZM61.186 82.7673H96.4588V94.7673H61.186V82.7673ZM74.4146 84.024L65.4286 93.0099L56.9433 84.5246L65.9293 75.5387L74.4146 84.024ZM74.4146 65.2715C79.5929 70.4499 79.5929 78.8456 74.4146 84.024L65.9293 75.5387C66.4213 75.0466 66.4214 74.2489 65.9293 73.7568L74.4146 65.2715Z"
                 fill="#353535"
                 mask="url(#path-2-outside-1_25_179)"
               />
               <defs>
                 <filter
                   id="filter0_d_25_179"
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
                     result="effect1_dropShadow_25_179"
                   />
                   <feBlend
                     mode="normal"
                     in="SourceGraphic"
                     in2="effect1_dropShadow_25_179"
                     result="shape"
                   />
                 </filter>
               </defs>
             </svg>
           </div> 
          )}

          {/* Media Items */}
          <div className="media-container flex gap-4 px-4 md:px-10 lg:px-16 overflow-hidden items-center justify-center w-full">
            {currentItems.map((item, index) => (
              <div
                key={index}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center bg-gray-300 rounded-lg"
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Right Arrow (disable if at the end) */}
          {startIndex + itemsPerPage < displayedItems.length && (
            <div
              className="right absolute hidden md:block w-8 h-8 right-[5%] top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={scrollRight}
            >
              <div
                className="right absolute w-8 h-8 right-[5%] top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={scrollRight}
              >
                {/* SVG Right Arrow */}
                <div
              className="right absolute w-8 h-8 right-[5%] top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={scrollRight}
            >
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
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroPhoto;
