import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const GameInterface = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = (e) => {
    setIsScrolled(e.currentTarget.scrollTop > 0)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full h-full relative overflow-hidden rounded-lg shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/9ea3/c2a5/258e9acc950cdef2a23e058d05c99fd5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2ZtSZMtq87oU-xDZEgfe~ngWhCOn6K6OyHAjIJudqoYE5CadS0MrgBFiNUjZnFDgGRYZD4frEXa~A88lcBxbXniAnwuIRxwExdQSI1TUQqEOFCNGFG9Z~PEgAfUT52-Ax2qY6-LBj42LtVGMC-SkK2O4Cvi6vcfPn5LtuUIYxKipg~rEYw2OnUmQhODIg5rSd8e8WkK3LeJymeG4aKaaqxA7xNVNlTVAOoS~nnxlnFfXtPnL0CEUzupfA-fcicsNsnxYOaHtsKU2DIHEQWZjokx~4Yina8cgwgBTXuo9tFmj3SfuVMrc0ijXfmlH-FUAxhQGz7JDOxteYP5gSxTCg__')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 h-full flex flex-col p-8">
          <h1 className="text-4xl font-bold text-white mb-2">ALABAY HERITAGE</h1>
          <h2 className="text-xl font-semibold text-green-400 mb-6">THE LOST ADVENTURE</h2>
          
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">FEATURES</h3>
            <div 
              className="h-[300px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-700"
              onScroll={handleScroll}
            >
              <ul className="space-y-4 text-white ">
                <li className='font-montserrat font-[900]'>Explore a variety of landscapes, including mountains, forests, deserts, and ancient ruins.</li>
                <li className='font-montserrat font-[900]'>Use the Alabay's abilities to solve puzzles that involve moving objects, activating mechanisms, or finding hidden clues.</li>
                <li className='font-montserrat font-[900]'>Discover relics that tell the story of the Alabay's ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.</li>
                <li className='font-montserrat font-[900]'>Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.</li>
                <li className="font-semibold font-montserrat font-[900]">Challenge Modes:</li>
                <li className="pl-4 font-montserrat font-[900]">- Time Trials: Compete in special timed challenges where the Alabai must navigate through complex mazes or complete puzzles within a time limit.</li>
                <li className="pl-4 font-montserrat font-[900]">- Exploration Mastery: A mode that rewards players for fully exploring every nook and cranny of the game's world, uncovering all secrets.</li>
              </ul>
            </div>
          </div>
          
          <div className="flex space-x-4 mt-6">
            <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-md font-semibold transition-colors duration-200">
              PLAY
            </button>
            <Link to="/">
            <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-md font-semibold transition-colors duration-200">
              EXIT
            </button></Link>
          </div>
        </div>
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        )}
      </div>
    </div>
  )
}

const Game2 = ({ onPlay }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="relative h-screen w-full bg-gray-800 rounded-lg p-6 overflow-hidden shadow-xl">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 z-0"
          style={{
            backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/9ea3/c2a5/258e9acc950cdef2a23e058d05c99fd5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2ZtSZMtq87oU-xDZEgfe~ngWhCOn6K6OyHAjIJudqoYE5CadS0MrgBFiNUjZnFDgGRYZD4frEXa~A88lcBxbXniAnwuIRxwExdQSI1TUQqEOFCNGFG9Z~PEgAfUT52-Ax2qY6-LBj42LtVGMC-SkK2O4Cvi6vcfPn5LtuUIYxKipg~rEYw2OnUmQhODIg5rSd8e8WkK3LeJymeG4aKaaqxA7xNVNlTVAOoS~nnxlnFfXtPnL0CEUzupfA-fcicsNsnxYOaHtsKU2DIHEQWZjokx~4Yina8cgwgBTXuo9tFmj3SfuVMrc0ijXfmlH-FUAxhQGz7JDOxteYP5gSxTCg__")',
          }}
        ></div>

        <div className="relative z-10 flex flex-col items-start gap-8">
          <div className="flex-1">
            <h1 className="text-5xl font-bold uppercase tracking-wider">ALABAY HERITAGE
            </h1>
            <h2 className="text-indigo-400 text-lg uppercase mb-4">tHE LOST ADVENTURE</h2>
            <p className="text-gray-300 mb-6 font-montserrat font-[700]">
              Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
            </p>
            <div className="flex gap-2 items-center ">
              <button
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white flex items-center gap-2"
                onClick={onPlay}
              >
                <span>Play</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-4.752-3v6l4.752-3z"
                  />
                </svg>
              </button>
              <p className='font-montserrat font-[600]'>click to see feature</p>
            </div>
          </div>

          <div className="flex flex-col items-start w-full pt-[5vw]">
            <h3 className="text-xl text-white mb-4">Game Preview</h3>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
              {[
                {
                  imgSrc: "https://s3-alpha-sig.figma.com/img/0565/c51f/853323e69d9f16cea8f642ff8e3a86ba?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hy-OU6cCBd3Lz2taZLPM1Q7hlW8P3m9HCGAIxWvPkywCJSxkwI8zKXkRw82Jo5dRdPSwskYxUkQbG~hrosVIDisbaEEDHfyBgzPxLqaO8Z-zqHjYf0Pi2ogQd6wvH6eSoU3qFw3kFd6c6z-hxeJfeYCZ0~CDIMp3bSli71lYN43ovB38pRF5qV-90Q91oPrn5ERqmzB5aWO~lwTDn8U65R0i8tXvQISxQaIPpHcrbcJ~hkwNDEFxvLGlLB2MCj59yS1QhlOCnRxVSY-Dh3Ch68Xq~zFKMfgiG6w7eOXabT8xjEfgnP3dc3ZxGFPYGYddpw169lMnBImGoV9iP7VV4g__",
                  altText: "Preview 1",
                  description: "Explore the Village",
                },
                {
                  imgSrc: "https://s3-alpha-sig.figma.com/img/1243/de2a/2f35b2812077928282c36cd1462a700e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iyvgJ1OWA7cdyp1o5IMBYd76bwz3HhepxzLTtpV~pzqs-lWhTL85DRgx0E41Ywb32eYs6fe1~6hWa5ObLjW5zerXyvZk65EUVe5tPrtQjP47o1QxcMWHECqFmB4LInGl9oOG07Rw5G6NfE1TMWuI~1AEB6PKtzqN2sJP30w-E0I8djYWNPU3iFGyt4ekcurY66bq6X9ddrs2pQgYqv~WmMutN79HwypFeNaCOG2xTFtWQ0c2vCpInapXHAv2EQQSRIQn2ldf5byKWcd-rEz69Tq~UaaxQ24iWCZbFx5I4FwIBp9Jnxyu-vexD-ttEyuc~TBanfNqPp2c8rqmdLJ1hQ__",
                  altText: "Preview 2",
                  description: "Protect the Steppes at Night",
                },
                {
                  imgSrc: "https://s3-alpha-sig.figma.com/img/6394/0394/a9cc88bd7bb13d9606f8b43ca3f22818?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ea6TS0t1eSKUsbWuJ-DnkQQZV-LEBJH22Sc5xhebedTLfEyfpg2bWQe-etjzOxiht5nWE5ugu8ZtKrnZpB7u4HlzKQLqtij925O0iRbDYEe07iB~aD0GCV~Z5myWE0VpnQ-ddzBSNH0aqAfgTN0BE0Edy1yRi5YQdHUPw5t-O8Dgtjq8OK~hrltX1HRkBQ2-VRla0upI8SVkxUJqXIwBU6gSQwM5z-CgdcPk-r6m6dCBIZZinZQ63Px4AQE~BdX1d~ltp5UU4YnybFBgmY5UtvEvS0WBZVm9VmRvrHMNWnCkAKkfOpzIgigfpfyxPEC349hXwdMCRfOc8NI-JaHqpg__",
                  altText: "Preview 3",
                  description: "Discover Hidden Secrets",
                },    
              ].map((card, index) => (
                <div key={index} className="h-[20vw] w-[20vw] bg-gray-700 p-4 rounded-lg flex-shrink-0">
                  <img
                    src={card.imgSrc}
                    alt={card.altText}
                    className="rounded-lg mb-3"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CombinedGameInterface() {
  const [showGameInterface, setShowGameInterface] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop } = containerRef.current
        if (scrollTop > 100) { // Adjust this value to determine when to switch
          setShowGameInterface(true)
        } else {
          setShowGameInterface(false)
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handlePlay = () => {
    setShowGameInterface(true)
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto">
      {showGameInterface ? (
        <GameInterface />
      
      ) : (
        <Game2 onPlay={handlePlay} />
      )}
    </div>
  )
}