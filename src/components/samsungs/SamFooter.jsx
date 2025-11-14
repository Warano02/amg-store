import { Link } from "react-router-dom";
import { useAppContext } from "@/hooks/useAppContext";
import { assets } from "@/assets/assets";

function SamFooter() {
    const {compagny}=useAppContext()
  return (
    <footer className="px-6 mt-10 md:px-16 border-t-2 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
          <img
            className="h-9"
            src={assets.logo.logo}
            alt="dummyLogoDark"
          />
          <p className="mt-6 text-sm">
            Discover our store, your go-to destination for the latest in
            technology, appliances, and accessories. Enjoy quality service,
            expert advice, and fast delivery. Join our community and shop with
            confidence !
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/faq/about"}>About us</Link>
              </li>
              <li>
                <Link to={"/faq/contact"}>Contact us</Link>
              </li>
              <li>
                <Link to={"/faq/contact"}>Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>{compagny.phone} </p>
              <p>{compagny.email} </p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright {new Date().getFullYear()} © {compagny.name}. All Right Reserved.
      </p>
    </footer>
  );
}

export default SamFooter;
