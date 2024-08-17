import first from "../../assets/first.jpg";
import second from "../../assets/Center.jpg";
import third from "../../assets/last.jpg";
export default function Footer() {
  return (
    <footer className="relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden bg-brown  mt-5 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className="relative block fill-lightPink"
          ></path>
        </svg>
        <div className="text-white flex justify-center items-center  cursor-pointer space-x-2 mx-10 my-12">
          <div className="border-2 border-white p-4">
            <h1>COME BY</h1>
            <p>10AM -6PM</p>
            <p>MONDAY - SATURDAY</p>
            <p>12345 Legacy Building  </p>
            <p>Liverpool United Kingdom, 5234</p>
          </div>
          <div>
            <img src={first} className="h-70 w-40 object-cover"/> </div>
           
            <div>
            <img src= {third} className="h-70 w-40 object-cover"/>
            </div>
            <div>
            <img src={second} className="h-70 w-40 object-cover"/>
            </div>
         
        </div>
        <div className="text-white mb-4 flex justify-center items-center ">
        <div>
            <h1 className="text-2xl font-semibold underline m-4">Need Anything?</h1>
        </div>
        <div className="shadow space-y-4 p-4 border-2 border-white">
            <p>123-345-2345</p>
            <p>lizzzzz@myonlinebookstore.co</p>
            <p>Hello@reallybeautifulpage.com</p>
        </div>
        </div>
      </div>
    </footer>
  );
}
