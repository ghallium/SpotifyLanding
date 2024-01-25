import { useState } from "react";
import SpotifyLogo from "../assets/spotify-logo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <header className="w-11/12 lg:w-2/3 py-5 m-auto flex justify-between items-center flex-col lg:flex-row">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <img src={SpotifyLogo} className={`w-32 ${isMenuOpen ? "self-end" :""}`} alt="logo Spotify" />

          {/* Burger menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu items */}
        <nav className={`lg:flex lg:items-center text-white font-bold ${isMenuOpen ? "w-full h-screen flex flex-col items-start text-3xl font-bold mt-4 lg:mt-0" : "hidden"} lg:ml-auto`}>
          <a className="py-4 lg:py-0 lg:px-5 hover:text-greenspot">Premium</a>
          <a className="py-4 lg:py-0 lg:px-5 hover:text-greenspot">Assistance</a>
          <a className="py-4 lg:py-0 lg:px-5 hover:text-greenspot">Télécharger</a>
          <a className="py-4 lg:py-0 lg:px-5 hover:text-greenspot">Profil</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
