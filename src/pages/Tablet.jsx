import { useEffect, useState } from "react";
import { ImageSlider } from "@/components/ImageGallery";
import { TitleTablet } from "@/components/°";
import { products } from "@/assets/assets";
import { useParams } from "react-router-dom";
import { useShopContext } from "@/hooks/useShopContext";
import { ElementData } from "./Phone";

function Tablet() {
  const { formatPrice } = useShopContext();
  const { id } = useParams();
  const [selectedStorageIndex, setSelectedStorageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [storages, setStorage] = useState([]);
  const [phoneName, setPhoneName] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const selectedStorage = storages[selectedStorageIndex];
  const selectedColor = selectedStorage?.colors?.[selectedColorIndex] || {};
  const totalPrice = selectedColor?.price || selectedStorage?.price || 0;
  const normalPrice = selectedStorage?.normal || 0;
  const savings = normalPrice ? normalPrice - totalPrice : 0;

  const fetchPhone = async () => {
    try {
      setLoading(true);
      const product = products.find(el => el.id === id);
      if (!product) throw new Error("Product not found");
      setPhoneName(product.name);
      setStorage(product.storages || []);
      setImages(product.images || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhone();
  }, []);

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;

  return (
    <>
      <TitleTablet
        total={totalPrice}
        savings={savings}
        name={phoneName}
        storage={selectedStorage?.size}
        color={selectedColor?.name}
        size={'13.1"'} // Tu peux le rendre dynamique si nécessaire
      />

      <div className="flex relative pl-2 w-full h-[32em] gap-3 md:justify-between">
        <ImageSlider images={images} />
        <div className="hide-scrollbar overflow-auto relative w-full md:w-1/3 min-h-96 max-h-[32em] top-9">
          <div className="w-full h-8 rounded-4xl bg-[#F8F8F8] flex justify-center items-center mb-4">
            <span className="w-1/2 h-2/3 cursor-pointer shadow-2xs p-2 rounded bg-white font-bold text-[13px] flex justify-center items-center">
              {phoneName}
            </span>
          </div>

          <div className="mb-4">
            <h1 className="text-xl md:text-2xl font-bold mb-2">Storage</h1>
            <p>Limited Offer. <span className="text-[#ee9765]">Double your storage on us</span></p>
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
                  {ele.normal && <span className="text-orange-500 font-normal">Save -{formatPrice(ele.normal - ele.price)} </span>}
                </div>
              </div>
            ))}
          </div>

          <div className="w-full px-4 mt-6">
            <h1 className="text-xl md:text-2xl font-bold mb-2">Color</h1>
            <div className="flex gap-4">
              {selectedStorage?.colors?.map((color, i) => (
                <ElementData key={i} onClick={() => setSelectedColorIndex(i)} bg={color.col} isSelect={selectedColorIndex === i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tablet;
