import React from 'react';
import SpotifyLogo from "../assets/spotify-logo.png";
import InstagramLogo from "../assets/instagram.svg";
import XLogo from "../assets/twitterx.svg";
import FacebookLogo from "../assets/facebook.svg";

const footer = () => {
  return (
    <div className="bg-zinc-950 text-white">
        <footer className="w-11/12 lg:w-2/3 py-8 m-auto">
            <div className="flex flex-col lg:flex-row justify-evenly">
                <a href="#"><img src={SpotifyLogo} className="w-32 mb-4 lg:mb-0"/></a>
                <div className="flex flex-col py-4 lg:py-0 mb-6 lg:mb-0">
                    <p className="uppercase text-zinc-400 text-sm font-bold mb-4">Société</p>

                    <a href="https://www.spotify.com/fr/about-us/contact/" className="py-2">A propos</a>
                    <a href="https://www.lifeatspotify.com/" className="py-2">Offres d'emploi</a>
                    <a href="https://newsroom.spotify.com/" className="py-2">For the Record</a>
                </div>
                <div className="flex flex-col py-4 lg:py-0 mb-6 lg:mb-0">
                    <p className="uppercase text-zinc-400 text-sm font-bold mb-4">Communautés</p>

                    <a href="https://artists.spotify.com/" className="py-2">Espace artistes</a>
                    <a href="https://developer.spotify.com/" className="py-2">Développeurs</a>
                    <a href="https://ads.spotify.com/" className="py-2">Campagnes publicitaires</a>
                    <a href="https://investors.spotify.com/" className="py-2">Investisseurs</a>
                    <a href="https://spotifyforvendors.com/" className="py-2">Fournisseurs</a>
                </div>
                <div className="flex flex-col py-4 lg:py-0 mb-6 lg:mb-0">
                    <p className="uppercase text-zinc-400 text-sm font-bold mb-4">Liens utiles</p>

                    <a href="https://support.spotify.com/" className="py-2">Assistance</a>
                    <a href="https://open.spotify.com/" className="py-2">Lecteur Web</a>
                    <a href="https://www.spotify.com/fr/free/" className="py-2">Appli mobile gratuite</a>
                </div>
                <div className="flex space-x-3">
                    <a href="https://instagram.com/spotify"><div className="bg-zinc-600 rounded-full p-2"><img src={InstagramLogo} className="w-8" alt="logo Instagram"/></div></a>
                    <a href="https://twitter.com/spotify"><div className="bg-zinc-600 rounded-full p-2"><img src={XLogo} className="w-8" alt="logo X"/></div></a>
                    <a href="https://www.facebook.com/Spotify"><div className="bg-zinc-600 rounded-full p-2"><img src={FacebookLogo} className="w-8" alt="logo Facebook"/></div></a>
                </div>
                </div>
            </footer>
            <div className="text-xxs w-11/12 lg:w-2/3 m-auto lg:text-sm text-zinc-400 flex justify-end items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
            </svg>

                <p>France</p></div>
            <div className="low-footer w-11/12 pb-4 lg:pb-0 lg:w-2/3 m-auto text-zinc-400 text-xxs lg:text-sm flex flex-col lg:flex-row">
                <a href="https://www.spotify.com/fr/legal/" className="py-2 lg:py-0">Légal</a>
                <a href="https://www.spotify.com/fr/privacy/" className="py-2 lg:py-0">Centre de confidentialité</a>
                <a href="https://www.spotify.com/fr/legal/privacy-policy/" className="py-2 lg:py-0">Protection des données</a>
                <a className="py-2 lg:py-0">Paramètres des cookies</a>
                <a href="https://www.spotify.com/fr/legal/privacy-policy/#s3" className="py-2 lg:py-0">À propos des pubs</a>
                <a href="https://www.spotify.com/fr/accessibility/" className="py-2 lg:py-0">Accessibilité</a>
            </div>
        </div>
  )
}

export default footer