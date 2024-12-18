import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-y transition-all duration-300 ease-in-out">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="text-3xl font-bold">
                <span className="text-yellow-500 mr-9 h-16 transition-colors duration-300 ease-in-out hover:text-yellow-300">
                  Workify
                </span>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4">
            <div className="footer-section animate-footer-merge delay-100">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase transition-colors duration-300 ease-in-out hover:text-yellow-500">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium dark:text-gray-400 transition-colors duration-300 ease-in-out">
                <li className="mb-4">
                  <Link
                    to="/"
                    className="hover:underline transition-colors duration-300 ease-in-out hover:text-yellow-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:underline transition-colors duration-300 ease-in-out hover:text-yellow-500"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section animate-footer-merge delay-200">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase transition-colors duration-300 ease-in-out hover:text-yellow-500">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium dark:text-gray-400 transition-colors duration-300 ease-in-out">
                <li className="mb-4">
                  <a
                    href="https://github.com/ankit1390023"
                    className="hover:underline transition-colors duration-300 ease-in-out hover:text-yellow-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:underline transition-colors duration-300 ease-in-out hover:text-yellow-500"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section animate-footer-merge delay-300">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase transition-colors duration-300 ease-in-out hover:text-yellow-500">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium dark:text-gray-400 transition-colors duration-300 ease-in-out">
                <li className="mb-4">
                  <Link
                    to="#"
                    className="hover:underline transition-colors duration-300 ease-in-out hover:text-yellow-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:underline transition-colors duration-300 ease-in-out hover:text-yellow-500"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700 transition-all duration-300 ease-in-out" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 transition-all duration-300 ease-in-out">
            © 2023
            <a
              href="https://ankitSrivastav.com/"
              className="hover:underline transition-all duration-300 ease-in-out hover:text-yellow-500"
            >
              ankitSrivastav
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-all duration-300 ease-in-out"
            >
              {/* Facebook Icon */}
              <svg className="w-6 h-6" /* Insert Facebook Icon here */ />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-all duration-300 ease-in-out"
            >
              {/* Discord Icon */}
              <svg className="w-6 h-6" /* Insert Discord Icon here */ />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-all duration-300 ease-in-out"
            >
              {/* Twitter Icon */}
              <svg className="w-6 h-6" /* Insert Twitter Icon here */ />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-all duration-300 ease-in-out"
            >
              {/* GitHub Icon */}
              <svg className="w-6 h-6" /* Insert GitHub Icon here */ />
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-all duration-300 ease-in-out"
            >
              {/* Dribbble Icon */}
              <svg className="w-6 h-6" /* Insert Dribbble Icon here */ />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
