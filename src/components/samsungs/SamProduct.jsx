import { useEffect, useState } from "react";
import { products } from "../../assets/assets";
import { useShopContext } from "../../hooks/useShopContext";
import { Link } from "react-router-dom";

function SamProduct() {
  const { formatPrice } = useShopContext();

  const allTerms = [
    { name: "All products", value: "all" },
    { name: "Samsung Phone", value: "phone" },
    { name: "Samsung Tv", value: "tv" },
    { name: "Samsung Buds", value: "buds" },
    { name: "Samsung Appliance", value: "appliance" },
    { name: "Samsung Wearable", value: "wearable" },
    { name: "Audio", value: "audio" },
    { name: "Tablet and Laptop", value: "tablet" },
  ];

  const [productsData, setProductsData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [terms, setTerms] = useState(allTerms[0].value);

  useEffect(() => {
    setTimeout(() => {
      try {
        setProductsData(products);
      } catch (e) {
        console.log("Error while loading products " + e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 500);
  }, []);

  useEffect(() => {
    if (terms === "all") {
      setFilteredItems(productsData);
    } else {
      const filtered = productsData.filter(
        (p) => p.category?.toLowerCase() === terms
      );
      setFilteredItems(filtered);
    }
  }, [terms, productsData]);

  const handleChange = (e) => setTerms(e.target.value);

  if (loading) return <p className="mt-24 text-center text-gray-500">Loading...</p>;
  if (error) return <p className="mt-24 text-center text-red-500">Error loading products</p>;
  if (filteredItems.length === 0)
    return <p className="mt-24 text-center text-gray-500">No products in {terms}</p>;

  return (
    <div className="mt-20 w-full relative px-4">
      <div className="max-w-xs mx-auto mb-6">
        <select
          value={terms}
          onChange={handleChange}
          className="w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent p-2 text-sm text-gray-700 cursor-pointer"
        >
          {allTerms.map((term, i) => (
            <option key={i} value={term.value}>
              {term.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredItems.map((item, i) => (
          <Link
            to={`/collection/samsung/${item.category}/${item.id}`}
            key={item.id || i}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 w-[280px] p-4 flex flex-col items-center"
          >
            <div className="w-52 h-64 [perspective:1000px] mb-4 relative group">
              <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center bg-white rounded-md">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-w-[160px] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center bg-white rounded-md">
                  <img
                    src={item.images?.[1] ?? item.logo}
                    alt={`${item.name} alternate`}
                    className="max-w-[160px] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="w-full text-center">
              <h3 className="text-gray-800 font-semibold text-lg truncate">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{item.desc}</p>

              <div className="mt-2">
                <p className="text-indigo-600 font-semibold text-base">
                  {formatPrice(item.price)}{" "}
                  <span className="text-gray-400 text-sm line-through">
                    {formatPrice(item.normal)}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SamProduct;
