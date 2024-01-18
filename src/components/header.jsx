import { useState } from "react";
import SpotifyLogo from "../assets/spotify-logo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <header className="w-2/3 py-5 m-auto flex justify-between items-center">
        <img src={SpotifyLogo} className="w-32" alt="logo Spotify" />

        <div className="lg:hidden">
          {/* Burger menu button */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "visible" : "hidden"
          } flex flex-col justify-center items-center lg:flex lg:items-center text-white font-bold`}
        >
          <nav className="lg:space-x-5 h-screen lg:h-auto flex flex-col lg:flex-row lg:flex">
            <a className="py-4 lg:py-0 lg:flex">Premium</a>
            <a className="py-4 lg:py-0 lg:flex">Assistance</a>
            <a className="py-4 lg:py-0 lg:flex">Télécharger</a>
            <a className="py-4 lg:py-0 lg:flex">Profil</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
