import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from 'react';

import { useShopContext } from "../../hooks/useShopContext";
import { ImageSlider } from "./X022";
import Title from "./°";
const images = [
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png',
    'https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide5.png',
];
function SamPhone() {
  const { formatPrice } = useShopContext()
  const { id } = useParams()
  console.log(id);
  
  const [selectedStorageIndex, setSelectedStorageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const storages = [
    {
      size: '256Go',
      normal: 1299.99,
      price: 1199.99,
      colors: [
        { col: "#000000", name: "Black", price: 1112.99 },
        { col: "#ffffff", name: "White", price: 799.99 },
      ]
    },
    {
      size: '512Go',
      normal: 1499.99,
      price: 1399.99,
      colors: [
        { col: "#333333", name: "Graphite", price: 1299.99 },
        { col: "#dddddd", name: "Silver", price: 1199.99 },
      ]
    },
  ];

  const selectedStorage = storages[selectedStorageIndex];
  const selectedColor = selectedStorage.colors[selectedColorIndex];
  const totalPrice = selectedColor?.price || selectedStorage.price;
  const savings = selectedStorage.normal ? selectedStorage.normal - totalPrice : 0;

  return (
    <>
      <Title total={totalPrice} savings={savings} />
      <div className="flex relative pl-2 w-full h-[32em] gap-3 md:justify-between">
        <ImageSlider images={images} />
        <div className="hide-scrollbar overflow-auto relative w-full md:w-1/3 min-h-96 max-h-[32em] top-9">
          <div className="w-full h-8 rounded-4xl bg-[#F8F8F8] flex justify-center items-center mb-4">
            <span className="w-1/2 h-2/3 cursor-pointer shadow-2xs p-2 rounded bg-white font-bold text-[13px] flex justify-center items-center">Galaxie S25 Ultra</span>
          </div>
          <div className="mb-4">
            <h1 className="text-xl md:text-2xl font-bold mb-2">Storage</h1>
            <p>Limite Offer. <span className="text-[#ee9765]">Double your storage on us</span></p>
          </div>
          <div className="w-full p-4 flex flex-col gap-2">
            {storages.map((ele, i) => (
              <div
                key={i}
                onClick={() => { setSelectedStorageIndex(i); setSelectedColorIndex(0); }}
                className={`w-full h-24 border-2 ${selectedStorageIndex === i ? 'border-blue-500' : 'border-blue-200'} rounded flex items-center justify-between p-2 cursor-pointer`}
              >
                <h1 className="text-xl font-bold">{ele.size}</h1>
                <div className="flex flex-col gap-2 justify-end">
                  <div className="flex gap-1">
                    {ele.normal && <span className="text-gray-500 font-semibold line-through"> {formatPrice(ele.normal)} </span>}
                    <h2 className="font-bold">{formatPrice(ele.price)} </h2>
                  </div>
                  {ele.normal && <span className="text-orange-500 font-[400]">Save -{formatPrice(ele.normal - ele.price)} </span>}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full px-4 mt-6">
            <h1 className="text-xl md:text-2xl font-bold mb-2">Color</h1>
            <div className="flex gap-4">
              {selectedStorage.colors.map((color, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedColorIndex(i)}
                  className={`w-20 h-20 rounded-full cursor-pointer border-2 ${selectedColorIndex === i ? 'border-blue-500' : 'border-gray-300'}`}
                  style={{ backgroundColor: color.col }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default SamPhone;
