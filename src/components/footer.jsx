import React from 'react';
import SpotifyLogo from "../assets/spotify-logo.png";
import InstagramLogo from "../assets/instagram.svg";
import XLogo from "../assets/twitterx.svg";
import FacebookLogo from "../assets/facebook.svg";

const footer = () => {
  return (
    <div className="bg-zinc-950 text-white">
        <footer className="w-2/3 py-8 m-auto">
            <div className="flex justify-evenly">
                <a href="#"><img src={SpotifyLogo} className="w-32"/></a>
                <div className="flex flex-col">
                    <p className="uppercase text-zinc-400 text-sm font-bold mb-4">Société</p>

                    <a className="py-2">A propos</a>
                    <a className="py-2">Offres d'emploi</a>
                    <a className="py-2">For the Record</a>
                </div>
                <div className="flex flex-col">
                    <p className="uppercase text-zinc-400 text-sm font-bold mb-4">Communautés</p>

                    <a className="py-2">Espace artistes</a>
                    <a className="py-2">Développeurs</a>
                    <a className="py-2">Campagnes publicitaires</a>
                    <a className="py-2">Investisseurs</a>
                    <a className="py-2">Fournisseurs</a>
                </div>
                <div className="flex flex-col">
                    <p className="uppercase text-zinc-400 text-sm font-bold mb-4">Liens utiles</p>

                    <a className="py-2">Assistance</a>
                    <a className="py-2">Lecteur Web</a>
                    <a className="py-2">Appli mobile gratuite</a>
                </div>
                <div className="flex space-x-3">
                    <a><div className="bg-zinc-600 rounded-full p-2"><img src={InstagramLogo} className="w-8" alt="logo Instagram"/></div></a>
                    <a><div className="bg-zinc-600 rounded-full p-2"><img src={XLogo} className="w-8" alt="logo X"/></div></a>
                    <a><div className="bg-zinc-600 rounded-full p-2"><img src={FacebookLogo} className="w-8" alt="logo Facebook"/></div></a>
                </div>
                </div>
            </footer>
        </div>
  )
}

export default footer