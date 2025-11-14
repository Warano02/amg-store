import { useEffect, useState } from "react";
import { useShopContext } from "@/hooks/useShopContext";
import { useParams } from "react-router-dom";
import { products } from "@/assets/assets";

function SamBu() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [selectedBand, setSelectedBand] = useState(null);
  const [activeTab, setActiveTab] = useState("Device");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setImgSrc(color.image);
  };

  useEffect(() => {
    const fetchProduct = () => {
      try {
        const fi = products.find((item) => item.id === id);
        if (!fi) throw new Error("Product not found");
        setProduct(fi);
        setSelectedColor(fi.colors?.[0]);
        setImgSrc(fi.colors?.[0]?.image);
        setSelectedBand(fi.bands?.[0]);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading || !product || !selectedColor || !selectedBand) return <p>Loading...</p>;
  if (error) return <p>Error loading product.</p>;

  // PRODUCT
  return (
    <div>
      <Title />
      <main className="w-full h-[32em] flex items-center justify-center relative bg-white">
        <div className="w-10/12 md:w-1/2 h-full flex items-center justify-center relative flex-col">
          <img src={imgSrc} alt="Product image" className="max-h-[200px]" />
          <TabNavigation active={activeTab} setActive={setActiveTab} />
          <TabContent
            activeTab={activeTab}
            name={product.name}
            size={product.size}
            colors={product.colors}
            setSelectedColor={handleColorSelect}
            selectedColor={selectedColor}
            bands={product.bands}
            selectedBand={selectedBand}
            setSelectedBand={setSelectedBand}
          />
        </div>
      </main>
      <Footer
        name={product.name}
        size={product.size}
        color={selectedColor.name}
        band={selectedBand}
        price={selectedColor.price}
      />
    </div>
  );
}

const Title = () => (
  <div className="fixed top-0 w-full h-20 border-b flex items-center justify-center text-black bg-white z-10">
    <div className="relative w-10/12 md:w-1/2 h-full flex items-center justify-between">
      <button className="w-[50px] h-[50px] rounded-full bg-[#fdf6f6ab] cursor-pointer"></button>
      <h1 className="text-xl md:text-2xl font-bold">Watch design studio</h1>
      <button className="w-[150px] h-[50px] bg-black text-white rounded-4xl cursor-pointer">
        Buy Now
      </button>
    </div>
  </div>
);

const Footer = ({ name, size, color, band, price }) => {
  const { formatPrice } = useShopContext();
  return (
    <footer className="w-full h-56 border-t border-gray-300 flex items-center justify-center relative">
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <div className="w-10/12 flex gap-6">
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold">{name}</h1>
            <p className="font-mono">
              <span>{size} case,</span> <span>{color}</span>
            </p>
            <p className="font-mono">
              {band.name} band, {band.color}
            </p>
          </div>
          <p className="text-gray-500 text-sm md:text-base">
            From{" "}
            <span className="font-bold text-black">{formatPrice(price)}</span>
            <br /> or{" "}
            <span className="font-bold text-black">
              {formatPrice(Math.floor(price / 12))}
            </span>
            /mo.
          </p>
        </div>
        <button className="w-2/3 h-16 bg-black text-white rounded-4xl mt-4 cursor-pointer transition hover:bg-[#161616]">
          Add to Cart
        </button>
      </div>
    </footer>
  );
};

const TabNavigation = ({ active, setActive }) => {
  const tabs = ["Device", "Case", "Band"];

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="flex space-x-6 text-sm font-semibold">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="relative pb-1 cursor-pointer transition duration-200 hover:text-black"
          >
            <span className={active === tab ? "text-black" : "text-gray-600"}>
              {tab}
            </span>
            {active === tab && (
              <div className="absolute -bottom-0.5 left-0 right-0 h-[3px] bg-black rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const TabContent = ({
  activeTab,
  name,
  size,
  colors,
  setSelectedColor,
  selectedColor,
  bands,
  selectedBand,
  setSelectedBand,
}) => {
  switch (activeTab) {
    case "Device":
      return (
        <div className="mt-4">
          <button className="border-2 border-black rounded-full px-4 py-1 font-medium text-sm">
            {name}
          </button>
        </div>
      );
    case "Case":
      return (
        <div className="mt-4 flex flex-col gap-4 items-center">
          <button className="border-2 border-black rounded-full px-2 py-1 font-medium text-sm">
            {size}
          </button>
          <div className="flex gap-4 items-center mt-2">
            {colors.map((color, i) => (
              <div
                key={i}
                className={`flex flex-col items-center cursor-pointer transition duration-200 ${
                  selectedColor.name === color.name
                    ? "border-2 border-sky-400 shadow-md -translate-y-1"
                    : "border border-gray-200"
                } p-2 rounded-xl`}
                onClick={() => setSelectedColor(color)}
              >
                <div
                  className="w-10 h-10 rounded-full"
                  style={{ backgroundColor: color.color }}
                ></div>
                <p className="text-sm mt-1">{color.name}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case "Band":
      return (
        <div className="mt-4 flex flex-col items-center gap-4">
          <div className="flex gap-4">
            {bands.map((band, i) => (
              <div
                key={i}
                onClick={() => setSelectedBand(band)}
                className={`w-10 h-10 rounded-full cursor-pointer transition duration-200 ${
                  selectedBand.name === band.name
                    ? "border-2 border-sky-400 shadow-md -translate-y-1"
                    : "border border-gray-200"
                }`}
                style={{ backgroundColor: band.color }}
              ></div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default SamBu;
