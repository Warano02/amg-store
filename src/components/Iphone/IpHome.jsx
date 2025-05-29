import { assets } from "../../assets/assets"
import { useShopContext } from "../../hooks/useShopContext"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function IpHome() {
  const items = [
    <Elem bg={assets.bg.s200s1} key={1} name={"Mac Book Air"} price={1885} />,
    <Elem bg={assets.bg.sld45} key={2} name={"Mac Book Air"} price={1885} color={"white"} />,
    <Elem bg={assets.bg.iap} key={3} name={"iPad Air"} price={599} />,
    <Elem bg={assets.bg.iPride} key={4} name={"Apple Watch Pride Edition Sport Brand"} desc={"Show your stripes"} price={49} ai={false} fo={false} />,
    <Elem bg={assets.bg.wat} key={5} name={"Apple Watch Series 10"} price={399} desc={"Thinstant Classic"} ai={false} />,
    <Elem bg={assets.bg.ip1} key={6} name={"iPhone 16e"} price={599} />,
    <Elem bg={assets.bg.ipa2} key={7} name={"iPad"} price={349} ai={false} desc={"Lovable. Drawable. Magical"} />,
    <Elem bg={assets.bg.i16} key={8} name={"iPhone 16"} price={799} color={"white"} />,
    <Elem bg={assets.bg.wat2} ai={false} desc={"New Finish. Never quit."} key={9} name={"iPhone 16"} price={799} color={"white"} />,

  ]

  return (
    <div className="w-full bg-[#F5F5F5] pt-4">
      <h1 className="w-full md:ml-12 md:w-[18em] h-50 mt-7 text-center text-xl md:text-4xl">
        Store.<span className="text-[#b6b6c4]">The best way to buy the products you love</span>
      </h1>
      <H1 h1={"The latest."} span={"Take a look at what’s new, right now."} />
      <ScrollSlider items={items} />
    </div>
  )
}

function H1({ h1, span }) {
  return (
    <h1 className="text-xl md:text-4xl font-bold md:ml-16 ml-2">
      {h1} <span className="text-[#b6b6c4]">{span}</span>
    </h1>
  )
}

export function Elem({ name, bg, price, color, ai = true, fo = true, desc = null }) {
  const { formatPrice } = useShopContext();
  const textColor = typeof color === 'string' ? color : color?.color || '#000';

  return (
    <div className="relative w-sm h-[500px] m-4 cursor-pointer overflow-hidden rounded-4xl group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="relative z-10 p-4 mt-14 ml-2.5 backdrop-blur-sm rounded-xl w-[90%] max-w-[90%]">
        <h1 className="text-xl md:text-2xl font-bold mb-2" style={{ color: textColor }}>{name}</h1>

        {ai && (
          <span
            className="mb-4"
            style={{
              backgroundImage:
                'linear-gradient(108deg, #0090f7 0, #ba62fc 34%, #f2416b 68%, #f55600 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
          >
            Apple Intelligence
          </span>
        )}

        {desc && <p className="text-xl font-semibold text-gray-600 mb-2">{desc}</p>}

        {fo ? (
          <p className={`${color ? "text-white" : " text-gray-700"} font-semibold`}>
            From {formatPrice(price)} or {formatPrice((price / 24).toFixed(2))}/mo. for 24 mo.†
          </p>
        ) : (
          <p className="font-semibold text-gray-700">{formatPrice(price)}</p>
        )}
      </div>
    </div>
  );
}

export function ScrollSlider({ items }) {
  const sliderRef = useRef()

  const scroll = (direction) => {
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
    } else {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full overflow-hidden">
      <ButtonScroll onClick={() => scroll("left")} direction="left" />
      <ButtonScroll onClick={() => scroll("right")} direction="right" />
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 no-scrollbar px-8 py-4 scroll-smooth hide-scrollbar"
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-[80%] md:min-w-[300px] p-4 flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export function ButtonScroll({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 p-2 bg-[#b7bacbc9] opacity-50 hover:opacity-90 rounded-full shadow cursor-pointer w-16 h-16 flex items-center justify-center 
        ${direction === "left" ? "left-2" : "right-2"}`}
    >
      {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
    </button>
  )
}

export default IpHome
