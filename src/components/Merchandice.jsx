import { useState, useEffect, useRef } from 'react';

const Merchandice = () => {
    const img = [
        {
          url: "https://s3-alpha-sig.figma.com/img/edce/29c2/b86c0256af15ca0c6c5763472967414e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n97rDZz99z~z0TsM9ew~HKxrFBQ-ElJAqZBXDwYAM6mt5YW~xigH-oCusCRoPZluIH8K3qYxWylfwWqpzQ3n~Wuj3OLE6QRqcc4OgqHTFUWsO1I8VOznfUCk5v6IT~lISOuRr8wbUltYQLtfzXbd1kW175XTfLXythQTh5G~dN36Vh7q0Q0VJRj3YQPMYNkTwNDYgzlmsvzNCXOlZJgYvBPlLI7yaPGv2r1JrZgbyKsUf3fm2ERhnG-S0iAwogINEauE3k5qNI6K3ZDM6vcP6~kxd99Jf6AA7qXPNY3MKiQEZsAfDBpKe2PxNCAzMh1E2qysd1pGrDZu4FRWMSmByA__",
          product:"https://s3-alpha-sig.figma.com/img/f96c/f585/6e6fa96ac57cc9a8bd4613d9e1815a7c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mAUDInCE11apShaRYRSJrP0a4Bm2gTSbso8xjM~Ka6QqOEeAhCZ9IW-uc~rfRQEpQs~DjxFvE32AQs0mye-rWC0r3ZXGeb2ytct7kZpVQ9FuoYTKp5WVuwz7Or2RDJEIG0iSzW29j0HXXtiORWjKwYWqiUFbovIa0odh7thgDacPUS5cEQVX05spy7KLTizAkV8-OwNRAtVKkV3NJtspuZEEimh-s3ERmnzuXkgbsEsHOkugCWv2zCgsKKf21aRFqEZ42EIW5m4uhWSx3GU2YZAscagiO7dyEbGyeeNzE6kr7oxeIQtvH1TGc~xDglki4wjw-04oVvDQc6i4y8EJXw__"
        },
        {
          url: "https://s3-alpha-sig.figma.com/img/7509/2c42/0295b873bfefd869e0278c7a23fda692?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X8TbJ4BDNgaBg4hy-OuXPW0RLjixq427h-RpfK7JLXe6zYyjy1uanOl5chg61Tpj2IVj6Wkt~gE6Bw-To4i0WARRUnvbnELe8aRKRHeZpBYkJcRSvEbGB2VWNW-Pg~jfhfwEzc~gQLLV58B-6p6A-A1EQtl6VZKSxIl9AWpWtx9h89Jjlvh65ZIBucwKGkbDjK7cc0-4DRrGw3n4CTT5wZFrItG9Bes1nhSXV~6CwXzvrZCqgG-wsdCTawyXrZmzIjYeSmo3txEKJvNclPn~LEvxUQm-FrQNXrgJGqjB8b5f1ldYouZ5KTb6GIEHW7oVEXfm5KKmReak8N6B0413NA__",
          product:"https://s3-alpha-sig.figma.com/img/5a5d/0c65/16c407234c3c6d89d725c544fb37f706?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fLXT~L-jFZMoHxAq4mgrF24YSoNvkbqR19lJskg6Woy2uA-hW80y33nmPXHdteRm81m0rdf~Mn2Qhmn1BoKfuXg08JCK335jRJcIP2aZk2oq~Cq-A6SdIx85q4HFmIma-FQ5J9-aK4nahgw1FqHo2TWYNJoJTMkuKLffReEeSuKxOXk2iufWvUowNgDrMiFYttaCeJ4jh-Zp53TwouUrRKCfNnf4ha35adoQPrYLvwUo~53nFWZVDkvCysr5NvqwdhuvZQktGI2s7vxYv0rHm8~7RponE7QH74XpkEGkD6-n1atBdh9ziNwDKoq5GfV2UzhsEf4VU0XvvLA7zvgKjQ__"
        },
        {
          url: "https://s3-alpha-sig.figma.com/img/fc76/6d8d/8b344d796e5a7f49ab6712d0d329037f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=STO5E3ivRqf3-N4h0n2uX2vFbwdsUxMtqH7lFi0zVE0pF3HLAH4RhEePPE0r0--vyscE~MTo1MfTrVw9seS41KoiyKjOp-BRmdyTnnEXP-KPXDHhDcKdBy~EkuqS~2SGUcvCdXKUnzCPpvH~5Qy57ibsk34v1t8G8r4qrG1t0KpjB92xMPp7vDFWIY627CadL4g~f5qMsl60w0SSN8h9WdXmRaeDO4k0vWLrjjpHR5UQuR7d2z4nw~pltfqKEVItSKkZRhbG2ZHawi5kdlI2HOVIV4A3vvmM3PYzrbDecHuMP5oz7kSUGmlenzkNqY~pP~bbHu~vTZwpnBhnG1ASZQ__",
          product:"https://s3-alpha-sig.figma.com/img/eba7/5cca/d4b190889664cb2ea8138c5f2524aa42?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JiqTSv1TNJLtBp3LC~MutS4oTtTWafmH7FKZHXAlrcYrPHljFAEqokUBUaEd2yV-E~iUK5Bx1dGUoTmkXxFEBEm8RJQ4ySYh7iRVULJuoeuUPa4T1TSeP6NvY8k3zbJOuAjr7LdbVpcRWYwEePpS9qmf0qgoZDOWvmnvQ62-V1zRgiP-gEsmJzc4yV-BCNhVJ-OeVxMqmtvCMC3gbkgCrralu0L8lr0FgxkYcJ0rBszq80jfI2q1BV6qpl~UlV6~e~7KdRxFF98opNXL9MC0102glU35j0oCUow3AOJ3M6W6DUeIsL6Z4YDhOhFlJZbTIj-xyNPGWkjoUmyAyAOy2A__"
        },
        {
          url: "https://s3-alpha-sig.figma.com/img/eafa/fb0c/20d274e8c38d04ea7420452643e06eb7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=id2enPMUMa9XY5avmFhQaBQdhUixLMiiwMumW~KVgyqNpRJWqTnN8N-mbDtaRup0l5m3XJ~CO4ic8rkQ3ApGUmNxsnPeu-APPx5O6IDmVLExiw6TrXQTm5V2bW6AyUbPmTgJSLGt4nGf20X4FTKWDXHMwZNON5ldEsdMYiKpQ58qmrPYWwb4uZgbaxVdRCpb52UEqsebX7e0tRtVSmE6BBByb736Vs0a7poYB20DqmmT0GRnfE8pwkPmEfDluVjlfqwSiprT8UXInSZqyPxK73afUbGlVv~oSkxgIcKlqFFa7KAYsxo0BT04IMAhTxVOW1rDYyYu8XvIKiBuLIZ0dQ__",
          product:"https://s3-alpha-sig.figma.com/img/c42d/5d39/434f2dd7b079048ff887755f13893595?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aeiCQ~Dd95jrhHmxEDeZsaoGCxv0VW6QCrdCjLgrBudC-nOYnBbtJz2R2Iyqz-XoHhvfLJHEaMMBHzk5rswML5uinjoyfFG7Yz8vmRStF~kseMIG3w~HV87XZNgaPImEISS1y4nG5uOmzagoKetu~vQDniQT4Dto0~xU2FJhs-3UabZHnS0T-Ty0U1V6NN4PVXQ6iZpPei4ltHZD1MXwO43wBPSt3cdNt7jy6Enbw4YUhtXemFGYa2~J-HrVtmtk5hiqRJjLFGgPS1~Ekj5O0EUVWEhAOlPNDxd-h3yG2B8myVu-TKpTOP~VxpBKa0bUPdErnlRtvggwaBJW5rAgGg__"
        },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    // This effect will run when the currentIndex changes
    if (containerRef.current) {
      const container = containerRef.current;
      container.style.transition = "transform 0.5s ease-in-out";
      container.style.transform = `translateX(${-currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="container w-full relative overflow-hidden" style={{ maxWidth: '800px' }}>
        <div className="heading p-2 px-8 mb-8">
          <h1 className=" text-6xl md:text-6xl lg:text-8xl text-black text-center uppercase bg-gradient-to-b from-[#FFF280] to-[#FFA800] bg-clip-text text-transparent">
            Merchandise
          </h1>
        </div>
        <div
          className="images w-full flex"
          ref={containerRef}
          
        >
          {img.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 flex items-center justify-center">
              <div className="relative">
                <img src={item.url} alt={`Merchandise ${index + 1}`} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img  src={item.product} alt={`Product ${index + 1}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 top-[59%] transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={handlePrev}
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 6L9 12L15 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <button
          className="absolute right-4 top-[59%] transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={handleNext}
        >
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Merchandice;



