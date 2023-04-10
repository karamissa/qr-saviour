const Navbar = ({ toggleDarkMode }) => {
  return (
    <div className="w-full flex justify-between items-center p-10 text-4xl ">
      <h1 className="font-extrabold">QR Saviour</h1>

      <svg
        className="w-8 h-8 cursor-pointer rounded-full p-1 dark:hover:bg-gray-600 hover:bg-gray-300 transition duration-200"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        onClick={toggleDarkMode}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    </div>
  );
};

export default Navbar;
