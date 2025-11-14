import { useEffect, useRef, useState } from "react";
import Slider from "./SamHero";
import { assets, offers, products } from "@/assets/assets";
import { Link } from "react-router-dom";
import "/src/style/samsung.css";
import { useShopContext } from "@/hooks/useShopContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const H1 = ({ text }) => {
  return (
    <h1 className="text-2xl md:text-4xl font-bold ml-2 md:ml-8 mt-8 mb-8">
      {text}{" "}
    </h1>
  );
};

function SamHome() {
  const scrollRef = useRef(null);
  const { formatPrice } = useShopContext();
  return (
    <>
      <Slider />
      <h1 className="text-2xl md:text-4xl m-8 font-bold text-center ">
        Shop all the latest products and innovations
      </h1>

      <div className="w-full px-4">
        {/* Wrapper pour isoler la scrollbar */}
        <div className="relative">
          {/* Contenu scrollable */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent  hide-scrollbar"
            style={{ scrollBehavior: "smooth" }}
          >
            {offers.map((offer, index) => (
              <div key={index} className="shrink-0 w-[200px] text-center">
                <div className="w-[100px] h-[100px] mx-auto rounded-lg overflow-hidden bg-white cursor-pointer shadow transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={offer.img}
                    alt={offer.label}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="mt-2 text-sm font-medium">{offer.label}</p>
              </div>
            ))}
          </div>

          {/* Barre visuelle simulée au milieu */}
          <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none">
            <div className="h-1 bg-gray-300 w-1/2 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[32em] mt-4 mb-4 flex items-center justify-center md:justify-start">
        <img src={assets.bg.bg2sam} className="w-full absolute" />
        <div className="relative w-[29.5em] h-96 flex flex-col justify-center items-center gap-1.5 md:ml-24">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-2">
            {" "}
            #YouMake every day Smarter{" "}
          </h1>
          <h3 className="font-semibold text-xl md:text-2xl text-center">
            Choose connection. Enjoy the moment.
          </h3>
          <div className="relative mt-2 flex justify-center gap-2 items-center  w-full">
            <Link to={"/"} className="group flex flex-col gap-0.5 text-black ">
              Learn More
              <div className="bg-black h-0.5 w-0 group-hover:w-full transition-all duration-300" />
            </Link>
            <button className="w-1/3 h-9 bg-black text-white font-bold rounded-full cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <H1 text={"Samsung smartphone"} />
      <ProductScroll
        scrollable={true}
        label={"phone"}
        products={products
          .filter(
            (elem) => elem.category === "phone" && elem.marque === "samsung"
          )
          .map((el) => ({
            ...el,
            subtitle: `Save up to ${formatPrice(
              el.price
            )} with instant trade-in credit`,
          }))}
      />
      <H1 text={"TV & Audio Offers"} />
      <ProductScroll
        scrollable={true}
        label={"tv"}
        products={products
          .filter(
            (elem) =>
              elem.marque === "samsung" &&
              (elem.category === "tv" || elem.category === "audio")
          )
          .map((ele) => {
            if (ele.category === "tv") {
              return {
                ...ele,
                subtitle: `Save ${formatPrice(
                  ele.normal - ele.price
                )}. Now ${formatPrice(ele.price)} or ${formatPrice(
                  (ele.price / 24).toFixed(2)
                )} /mo for 24 mos.`,
              };
            } else {
              return {
                ...ele,
                subtitle: `Save ${formatPrice(
                  ele.normal - ele.price
                )}. Now ${formatPrice(ele.price)}`,
              };
            }
          })}
      />

      <H1 text={"Appliance Offers"} />
      <ProductScroll
        label={"appliance"}
        scrollable={true}
        products={products
          .filter((e) => e.category === "appliance")
          .map((el) => ({
            ...el,
            subtitle: `Save ${formatPrice(
              (el.normal - el.price).toFixed(2)
            )}+.Plus more on us. Now ${formatPrice(el.price)}`,
          }))}
      />
      <H1 text={"Wearable & Buds Offers"} />
      <ProductScroll
        label={"wearable"}
        scrollable={true}
        products={products
          .filter(
            (e) =>
              (e.marque === "samsung" && e.category === "wearable") ||
              e.category === "buds"
          )
          .map((el) => ({
            ...el,
            subtitle: `Save up to ${formatPrice(
              (el.normal - el.price).toFixed(2)
            )}+. From ${formatPrice(el.price)} before trade-in.°`,
          }))}
      />
      <H1 text={"Tablets & Computing Offers"} />
      <ProductScroll
        label={"tablet"}
        scrollable={true}
        products={products
          .filter((el) => el.marque === "samsung" && el.category === "tablet")
          .map((product) => ({
            ...product,
            subtitle: `Save up to ${formatPrice(
              (product.normal - product.price).toFixed(2)
            )}. From ${product.price} before trade in.`,
          }))}
      />
      <Marque cardData={products.filter(
        (elem) => elem.category === "phone"
      )} />
    </>
  );
}

export function Elem({ id, label, name, subtitle, index, logo }) {
  useGSAP(()=>{
    gsap.fromTo(
      `.link`,
      { opacity: 0, y: -20,x:-45 },
      { opacity: 1,x:0, duration: 2, }
    );
  })
  return (
    <Link
      to={`/collection/samsung/${label}/${id}`}
      key={index}
      className="link min-w-[20em] max-w-[22em] bg-white p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300"
      style={{ boxShadow: "0 4px 12px #F5F5F5" }}
    >
      <img
        src={logo}
        alt={name}
        className="w-full h-auto mb-2 object-contain"
      />
      <h3 className="font-semibold text-lg text-center">{name}</h3>
      <p className="text-sm md:text-xl text-gray-600 text-center p-2">
        {subtitle}
      </p>
    </Link>
  );
}

export function ProductScroll({ products, label, scrollable }) {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = (scrollLeft / maxScroll) * 100;
    setScrollProgress(progress || 0);
  };

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();
    return () => el.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="w-full relative">
      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth px-4 pb-6 hide-scrollbar "
      >
        <div className="flex gap-6 py-4 w-max">
          {products.map((product, index) => (
            <Elem
              key={index}
              index={index}
              label={label}
              id={product.id}
              name={product.name}
              logo={product.logo}
              subtitle={product.subtitle}
            />
          ))}
        </div>
      </div>

      <div
        className={`${scrollable ? "flex justify-center w-full" : "hidden"}`}
      >
        <div className="flex w-1/2 items-center gap-2 px-6 mt-[-0.5em]">
          <div className="relative flex-1 h-1 bg-gray-200 rounded overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gray-800 transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full shadow hover:bg-gray-200 cursor-pointer border-2 border-gray-200 hover:border-dashed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={24}
                width={24}
                viewBox="0 0 448 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full shadow hover:bg-gray-200 cursor-pointer border-2 border-gray-200 hover:border-dashed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Marque = ({ cardData }) => {
  const [stopScroll, setStopScroll] = useState(false);

  return (
    <>
      <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

      <div className="overflow-hidden w-full relative  mx-auto" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-[#F5F7FF] to-transparent" />
        <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 2500 + "ms" }}>
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <Link to={`/collection/samsung/${card.category}/${card.id}`} key={index} className="w-80 mx-4 h-120 relative group hover:scale-90 transition-all duration-300">
                <img src={card.logo} alt="card" className="w-full h-full object-cover" />
                <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                  <p className="text-white text-xl font-semibold text-center">{card.desc || card.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-linear-to-l from-[#F5F7FF] to-transparent" />
      </div>
    </>
  );
};

export default SamHome;
