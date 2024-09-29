import heroimage from "@/app/assets/images/hero.png";
import { FaArrowCircleDown } from "react-icons/fa";
import Image from "next/image";
function Test() {
  return (
    <div className="bg-[#f2f2ea] min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Merit App</h1>
          <nav className="relative">
            <ul className="flex space-x-4">
              <li className="relative group">
                <a
                  href="#services"
                  className="hover:text-gray-200 flex gap-1 items-center justify-center"
                >
                  <span>Services</span> <FaArrowCircleDown />
                </a>
                <ul className="absolute overflow-hidden hidden group-hover:block bg-white text-black shadow-lg mt-0 rounded">
                  <li>
                    <a
                      href="#calculate"
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

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between container mx-auto my-8 p-4">
        <div className="md:w-1/2 text-[ #003366 ]">
          <h2 className="text-6xl  font-bold mb-4 ">
            Welcome to the <br /> Merit App!
          </h2>
          <p className="text-lg mb-4">
            Calculate your university aggregate scores effortlessly and get
            personalized recommendations.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-200">
            Get Started
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Image src={heroimage} alt="Hero Image" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Disclaimer: The results provided by the Merit App are for
            informational purposes only.
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Merit App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Test;
