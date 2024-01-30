import { useState } from "react";
import SpotifyLogo from "../assets/spotify-logo.png";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <header className="w-11/12 lg:w-2/3 py-5 m-auto flex justify-between items-center flex-col lg:flex-row">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <img
            src={SpotifyLogo}
            className={`w-32 ${isMenuOpen ? "self-end" : ""}`}
            alt="logo Spotify"
          />

          {/* Burger menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                // icône de type "fermer" lorsque le menu est ouvert
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // icône burger lorsque le menu est fermé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12h18M3 6h18M3 18h18"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu items */}
        <nav
          className={`lg:flex lg:items-center text-white font-bold ${
            isMenuOpen
              ? "w-full h-screen flex flex-col items-start text-3xl font-bold mt-4 lg:mt-0 transition-all duration-300"
              : "hidden"
          } lg:ml-auto`}
        >
          <a
            href="https://www.spotify.com/fr/premium/?ref=spotifycom_header_premium_button"
            className="py-4 lg:py-0 lg:px-5 hover:text-greenspot"
          >
            Premium
          </a>
          <a
            href="https://support.spotify.com/"
            className="py-4 lg:py-0 lg:px-5 hover:text-greenspot"
          >
            Assistance
          </a>
          <a
            href="https://www.spotify.com/fr/download/"
            className="py-4 lg:py-0 lg:px-5 hover:text-greenspot"
          >
            Télécharger
          </a>
          <div
            className={`separator mx-4 lg:mx-0 ${
              isMenuOpen ? "rotate-90 transform" : "transform"
            }`}
          >
            <span className="font-normal">|</span>
          </div>
          <a
            href="https://www.spotify.com/fr/signup/"
            className="py-4 lg:py-0 lg:px-5 hover:text-greenspot"
          >
            S'inscrire
          </a>
          <a
            href="https://www.spotify.com/fr/login/?continue=%2Ffr%2Fpremium%2F"
            className="py-4 lg:py-0 lg:px-5 hover:text-greenspot"
          >
            Connexion
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
