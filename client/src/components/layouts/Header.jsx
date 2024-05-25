import { useState } from 'react'
import { useLocation } from 'react-router-dom';
const Header = () => {
    const location = useLocation();
    const urlPath = location.pathname;
    const [open, setOpen] = useState(false);


  const navItems = [
    {
      text: "Home",
      url: "/",
      class:
        "px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-brand dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white md:mt-0 md:ml-4 hover:text-brand text-white focus:text-brand focus:bg-brand",
      activeClass: "active",
    },

    {
      text: "About us",
      url: "/about-us",
      class:
        "px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-transparent  md:mt-0 md:ml-4 hover:text-brand text-white focus:text-brand focus:bg-brand",
      activeClass: "active",
    },
    {
      text: "Our Programs",
      url: "/our-programs",
      class:
        "px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-transparent  md:mt-0 md:ml-4 hover:text-brand text-white focus:text-brand focus:bg-brand",
      activeClass: "active",
    },
    {
      text: "News & Events",
      url: "/news-and-events",
      class:
        "px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-transparent  md:mt-0 md:ml-4 hover:text-brand text-white focus:text-brand focus:bg-brand",
      activeClass: "active",
    },
    {
      text: "Contact",
      url: "/contact-us",
      class:
        "px-4 py-2 mt-2 text-sm font-semibold rounded-lg dark-mode:bg-transparent  md:mt-0 md:ml-4 hover:text-brand text-white focus:text-brand focus:bg-brand",
      activeClass: "active",
    },
    {
      text: "🔑",
      url: "https://admin.gurukripafoundation.com.np/admin",
      target: "_blank",
      class:
        "bg-brand text-white px-2 py-3 mt-2 text-md font-bold rounded-lg bg-brand hover:bg-brand  focus:text-white hover:text-white md:mt-0 md:ml-4 hover:text-gray-100 focus:text-white hover:bg-brand  transition ease-in-out delay-100 over:-translate-y-1 duration-200 hover:scale-110",
      activeClass: "active",
    },
  ];

    return (
      <div className="bg-slate-900 font-body">
        <div className="w-full text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div
            data-x-data="{ open: false }"
            className="flex flex-col max-w-screen-2xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
          >
            <div className="flex flex-row items-center justify-between p-2">
              <a
                href="/"
                className="text-lg font-bold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                <img
                  src="/logo.png"
                  className="h-12 rounded transform scale-115 filter brightness-0 invert"
                  alt="logo"
                />
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline text-white"
                onClick={() => setOpen(!open)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    style={{ display: !open ? "block" : "none" }}
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path
                    style={{ display: open ? "block" : "none" }}
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <nav
              className={`flex-col flex-grow ${
                open ? "flex" : "hidden"
              } pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}
            >
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  className={`${item.class} ${
                    item.url !== "/" && urlPath.startsWith(item.url)
                      ? item.activeClass
                      : ""
                  }`}
                  href={item.url}
                  target={item?.target}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    );
}

export default Header