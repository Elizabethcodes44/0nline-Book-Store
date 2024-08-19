import Logo from "/ENCHANTED.png";
import { useState } from "react";
import { Link  } from "react-router-dom";
import { useAppContext } from "../../AppContext";
import "./header.css";
export default function NavBar() {
  const { wishlistCount, cartCount } = useAppContext();
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0" , link: "/"},
    { name: "Books", icon: "book-outline", dis: "translate-x-16" , link: "/books"},
    { name: "Categories", icon: "add-circle-outline", dis: "translate-x-32" , link:"/categories"},
    { name: "Trending", icon: "bonfire-outline", dis: "translate-x-48", link: "/trending" },
    { name: "Deals", icon: "diamond-outline", dis: "translate-x-64", link: "/deals" },
    { name: "WishList", icon: "podium-outline", dis: "translate-x-80" , link: "/wishlist", },
    { name: "Cart", icon: "cart-outline", dis: "translate-x-96" , link: "/cart", },

  ];
  const [active, setActive] = useState(0);
  return (
    <div className="bg-brown max-h-[6rem] px-6 rounded-t-xl flex justify-between items-center">
        <img src = {Logo} alt="Logo" className = "h-22 w-auto"/> 
      <ul className="flex relative space-x-4">
        <span className={`bg-green-600 border-4 border-lightPink h-16 w-16  absolute-top-5 rounded-full duration-500 ${Menus[active].dis}`}>
         

        </span>
     
     
        {Menus.map((menu, i) => (
         <li key={i} className="relative w-16">
         <Link
            to={menu.link}
            className="flex flex-col text-center pt-6 cursor-pointer"
            onClick={() => setActive(i)}
         >
            <span className={`${i === active && "-mt-6"} duration-500 text-xl cursor-pointer relative`}>
               <ion-icon name={menu.icon}></ion-icon>
               {i === 5 && wishlistCount > 0 && (
                  <span className="badge">
                     {wishlistCount}
                  </span>
               )}
               {i === 6 && cartCount > 0 && (
                  <span className="badge">
                     {cartCount}
                  </span>
               )}
            </span>
            <span className={`${active === i ? 'translate-y-4 duration-700 opacity-100': 'opacity-0 translate-y-10'}`}>
               {menu.name}
            </span>
         </Link>
      </li>
      
        ))}
      </ul>
    </div>
  );
}
