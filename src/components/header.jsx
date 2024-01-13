import React from 'react'
import SpotifyLogo from "../assets/spotify-logo.svg"

const header = () => {
  return (
    <div className="bg-black">
        <header className="w-2/3 m-auto flex justify-between items-center">
            <img src={SpotifyLogo} className="w-40" alt="logo Spotify" />
            <div className="navigation text-white font-bold">
                <nav className="space-x-5">
                    <a>Premium</a>
                    <a>Assistance</a>
                    <a>Télécharger</a>
                    <a>Profil</a>
                </nav>
            </div>
        </header>    
    </div>
  )
}

export default header