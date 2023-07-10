import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-5 ">
        <div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Fullpage Test
          </span>

          <ul className="flex flex-row items-center mb-6 text-sm font-medium text-gray-500  dark:text-gray-400">
            <li>
              <a href="/" className="mr-4 hover:underline ">
                About
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline ">
                Licensing
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200  dark:border-gray-700 lg:my-8" />
      </div>
    </footer>
  );
};

export default Footer;
