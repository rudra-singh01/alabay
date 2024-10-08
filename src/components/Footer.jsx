import { FaTwitter, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full min-h-screen mt-[7vw] p-2">
      <div className="container">
        <div className="heading w-full h-[44vh] px-4 p-5 md:px-10">
          <h1 className="text-6xl md:text-9xl text-[#FFA800] text-left">
            social media <br /> links
          </h1>
        </div>
        <div className="lower_image w-full h-auto flex flex-col md:flex-row items-center justify-between">
          <div className="twit w-full md:w-[50%] flex items-center justify-center flex-col">
            <div className="relative w-[90%] md:w-[250px] p-4 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg">
              <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-blue-500 transform translate-x-3 -translate-y-3"></div>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-white font-bold font-montserrat">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <FaTwitter className="text-white" />
                  </div>
                  Twitter Link
                </li>
                <li className="flex items-center gap-3 text-white font-bold font-montserrat">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                    <FaTelegram className="text-white" />
                  </div>
                  Telegram Link
                </li>
              </ul>
            </div>
          </div>
          <div className="dogy w-full md:w-[50%] flex justify-center">
            <img
              className="w-[90%] h-auto"
              src="https://s3-alpha-sig.figma.com/img/7680/b979/42ce0194fad0103bd91118827f9b094b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S2utOL5oWIkouIti8V4osia8GpVtQu8mEO7uqRJTQh8jvsJLj11zhqyyIBN0Oa3sznHZB4WH6zdmoy6FzBi~IoEQMdFm-iM8K8soSF3DVjjRAkCz1lynt49pPiP4uL6Bg-Z10csaYjccXd7yvB-00aQOQb831JPMA-1-BRcAyrBQwHSEpSZuVTBNyTgLUGoAqMPqHzwHhxk5YOlXESGEUxf~f5TwuIyhTxSXoFPuuDXrMRmorC7BDKfARGoDS0ceztcQ-zDcEeau2Z7xWg3NUnjzwUm0t7mYgwsDqsm7CpX804HlYkhUC1O~i8xdrSSYSGwR8-d3ttDlaOmpr40xaw__"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
