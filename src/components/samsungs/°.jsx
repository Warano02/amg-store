export default function Title({ total, savings,name,storage,color }) {
  const SVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 30" className="w-26 h-4">
      <polygon className="fill-yellow-400" points="15,0 19,10 30,10 21,15 24,25 15,18 6,25 9,15 0,10 11,10" />
      <polygon className="fill-yellow-400" points="45,0 49,10 60,10 51,15 54,25 45,18 36,25 39,15 30,10 41,10" />
      <polygon className="fill-yellow-400" points="75,0 79,10 90,10 81,15 84,25 75,18 66,25 69,15 60,10 71,10" />
      <polygon className="fill-yellow-400" points="105,0 109,10 120,10 111,15 114,25 105,18 96,25 99,15 90,10 101,10" />
      <polygon className="fill-yellow-400" points="135,0 139,10 150,10 141,15 144,25 135,18 126,25 129,15 120,10 131,10" />
    </svg>
  )
  return (
    <div className="sticky top-0 z-50 w-full h-[8em] bg-white flex border-b-0.2 border-gray-500 items-center justify-between md:p-2.5">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-2">{name} <span className="text-xl font-semibold text-gray-500">Unlocked | {storage} | Titanium {color} </span></h1>
        <div className="flex items-center ">
          <h3 className="font-semibold text-gray-800">SM-S93U1 /SM938UAKFXAA |</h3>
          <SVG />
          <span className="text-blue-500 cursor-pointer hover:underline">4.8 (7803)</span>
        </div>
      </div>
      <div className="flex justify-around gap-14 items-center h-full relative">
        <div className="flex flex-col gap-2">
          <span className="text-[1em] text-gray-500">Total</span>
          <span className="text-2xl font-bold">{`$${total.toFixed(2)}`}</span>
          <div className="flex gap-2">
            {savings > 0 && <span className="text-orange-500">Save ${savings.toFixed(2)}</span>}
          </div>
        </div>
        <button className="w-[130px] h-12 rounded-3xl bg-[#408CCE] text-white font-bold cursor-pointer">Continue</button>
      </div>
    </div>
  )
}
