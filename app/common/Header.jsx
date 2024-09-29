import { MdArrowDropDown } from "react-icons/md";
import Image from "next/image";
function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <a href="/"> Merit App</a>
        </h1>
        <nav className="relative">
          <ul className="flex space-x-4 pr-6">
            <li className="relative group">
              <a
                href="#services"
                className="hover:text-gray-200 flex gap-1 items-center justify-center"
              >
                <span>Services</span> <MdArrowDropDown />
              </a>
              <ul className="absolute overflow-hidden hidden group-hover:block bg-white text-black shadow-lg mt-0 rounded">
                <li>
                  <a
                    href="aggregate-calculator"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Calculate Your Aggregate
                  </a>
                </li>
                <li>
                  <a
                    href="#course-recommendations"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Get Course Recommendations
                  </a>
                </li>
                <li>
                  <a
                    href="#school-recommendations"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Get School Recommendations
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-200">
                About Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
