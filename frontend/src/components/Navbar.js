
import logo from "../logo.jpg"

function Navbar() {
    return (
      <>        
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
            <img src={logo} className="mr-4 w-9 h-9 sm:h-9" alt="Logo"></img>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">2GETHER</span>
        </a>
        <div className="flex md:order-2">
            <button type="button" className="text-white font-bold bg-green-600 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect Wallet</button>
        </div>
        <div className="hidden justify-between items-left w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
                <a href="/" className="block py-2 pr-4 font-bold pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
            </li>
            <li>
                <a href="/invest" className="block py-2 pr-4 font-bold pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Invest</a>
            </li>
            <li>
                <a href="/crowdfund" className="block py-2 pr-4 font-bold pl-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Crowdfund</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>
      </>
    );
  }

export default Navbar;