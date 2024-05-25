

const Footer = () => {
  return (
    // <div>
    //   <footer className="bg-red-900 py-4">
    //     <div className="container mx-auto text-center">
    //       <h2 className="text-white text-lg">
    //         ©Copyright {new Date().getFullYear()} Guru Kripa Foundation. All
    //         rights reserved.
    //       </h2>
    //     </div>
    //   </footer>
    // </div>

    <footer className="footer p-10 bg-gray-900 text-base-content mt-24">
      <div className="flex flex-col max-w-screen-2xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 transition ease-in-out delay-200 over:-translate-y-1 duration-200 hover:scale-110 cursor-pointer">
        <img
          src="/logo.png"
          className="h-24 bg-white rounded p-2"
          alt="api media logo"
        />
        <p className="font-extrabold text-2xl text-white">
          Guru Kripa Foundation
          <br />
          Adding values since 2020
        </p>
      </div>
      <div>
        <span className="uppercase font-bold text-subbrand">
          ध्यानका फाईदाहरु
        </span>
        <a className="hover:text-gray-300 text-white cursor-pointer">
          सम्पूर्ण मानसिक समस्याहरुको पहिचान गरि विशेष हिलिङ गराउन।
        </a>
        <a className="hover:text-gray-300 text-white cursor-pointer">
          आत्म बिश्वास बढाउन ।
        </a>
        <a className="hover:text-gray-300 text-white cursor-pointer">
          अनियन्त्रित बिचार हटाउन ।
        </a>
        <a className="hover:text-gray-300 text-white cursor-pointer">
          कार्य सफलता ।
        </a>
      </div>
      <div>
        <span className="uppercase font-bold text-subbrand">Company</span>
        <a href="/" className="hover:text-gray-300 text-white cursor-pointer">
          Home
        </a>
        <a
          href="/about-us"
          className="hover:text-gray-300 text-white cursor-pointer"
        >
          About us
        </a>
        <a
          href="/news-and-events"
          className="hover:text-gray-300 text-white cursor-pointer"
        >
          News and Events
        </a>
        <a
          href="/contact-us"
          className="hover:text-gray-300 text-white cursor-pointer"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
