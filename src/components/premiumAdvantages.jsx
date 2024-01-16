import React from 'react'

const premiumAdvantages = () => {
  return (
    <>
        <div className="premium-advantages bg-zinc-900 py-5">
            <div className="text-center text-white py-3">
                <h2 className="text-2xl lg:text-4xl font-bold mb-2">Vivez la différence</h2>
                <p className="text-base lg:text-2xl mobile:w-4/5 lg:w-2/5 m-auto mb-2">Passez à Premium et bénéficiez d'un contrôle total sur votre musique. Annulez à tout moment</p>
            </div>
            <table className="table-fixed text-white text-sm lg:text-base m-auto">
                <thead>
                    <tr className="border-b-1 border-white">
                        <th className="w-16 lg:w-40">Vos avantages</th>
                        <th className="bg-white text-black w-12 lg:w-24 px-3 py-8">Spotify sans abonnement</th>
                        <th className="bg-[#ad2489] w-24 p-3 border-l-2 border-black">Abonnement Spotify Premium</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="h-20 border-b-1 border-white">
                        <th className="font-normal text-left">Musique sans pub</th>
                        <th className="font-normal">Non</th>
                        <th className="bg-[#8a2d84] border-l-2 border-zinc-900">Oui</th>
                    </tr>
                    <tr className="h-20 border-b-1 border-white">
                        <th className="font-normal text-left">Télécharger pour écouter en mode hors connexion</th>
                        <th className="font-normal">Non</th>
                        <th className="bg-[#773281] border-l-2 border-zinc-900">Oui</th>
                    </tr>
                    <tr className="h-20 border-b-1 border-white">
                        <th className="font-normal text-left">Choisissez l'ordre de vos titres</th>
                        <th className="font-normal">Non</th>
                        <th className="bg-[#563a7c] border-l-2 border-zinc-900">Oui</th>
                    </tr>
                    <tr className="h-20 border-b-1 border-white">
                        <th className="font-normal text-left">Qualité sonore supérieure</th>
                        <th className="font-normal">Non</th>
                        <th className="bg-[#4f3c7b] border-l-2 border-zinc-900">Oui</th>
                    </tr>
                    <tr className="h-20 border-b-1 border-white">
                        <th className="font-normal text-left">Ecoutez avec vos proches en temps réel</th>
                        <th className="font-normal">Non</th>
                        <th className="bg-[#3f4078] border-l-2 border-zinc-900">Oui</th>
                    </tr>
                    <tr className="h-20 border-b-1 border-white">
                        <th className="font-normal text-left">Organisez la file d'attente de lecture</th>
                        <th className="font-normal">Non</th>
                        <th className="bg-[#2e4476] border-l-2 border-zinc-900">Oui</th>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </>
  )
}

export default premiumAdvantages