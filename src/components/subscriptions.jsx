import React from "react";

const subscriptions = () => {
  return (
    // Arguments abonnements

    <div className="bg-zinc-900 text-white py-3">
      <div className="w-11/12 lg:w-2/3 m-auto">
        <h3 className="text-4xl font-bold mb-2 text-center">
          Des abonnements abordables pour chaque situation
        </h3>
        <p className="text-center mb-2">
          Choisissez un abonnement Premium, et écoutez à volonté, sans pub, sur
          votre téléphone, votre enceinte et d'autres appareils. Payez de
          différentes manières. Annulez à tout moment.
        </p>
        <div className="payment-options text-center mb-4">
          Moyens de paiement
        </div>
        {/* Liste arguments */}
        <div className="flex items-center justify-center px-4 lg:px-12 py-1 lg:py-2 mb-6">
          <div className="w-screen lg:w-2/3 p-px bg-gradient-to-r from-[#ad2489] to bg-[#3f4078] rounded-2xl py-1">
            <div className="bg-zinc-900 rounded-xl p-8 flex flex-col items-center justify-center">
              <h4 className="font-bold mb-4">
                Avantages inclus dans tous les abonnements Premium
              </h4>
              <ul className="mx-0 lg:mx-20">
                <li>Musique sans pub</li>
                <li>Télécharger pour écouter en mode hors-connexion</li>
                <li>Choisissez l'ordre de vos titres</li>
                <li>Qualité sonore supérieure</li>
                <li>Écoutez avec vos proches en temps réel</li>
                <li>Organisez la file d'attente de lecture</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Options d'abonnement */}
        {/* Premium Perso */}
        <div className="subscription-options pb-3 flex flex-col lg:flex-row lg:flex-wrap justify-center space-x-0 lg:space-x-8">
          <div className="w-11/12 lg:w-1/4 m-auto lg:mx-0 border-red-100 border-2 rounded-md py-6 mb-4">
            <div className="w-48 bg-red-200 text-black font-bold p-1 mx-2 mb-2 rounded-sm">Gratuit Pendant 1 Mois</div>
            <div className="mx-2 flex justify-between">
              <p className="w-1/2 text-2xl font-bold mb-2">Premium Personnel</p>
              <div className="mx-2 flex flex-col">
                <span className="uppercase font-bold text-xl">Gratuit</span>
                <span className="uppercase text-xs">Pour 1 mois</span>
              </div>
            </div>
            <div className="mx-4 flex flex-col">
              <ul className="mx-2 mb-32 list-disc">
                <li>1 compte Spotify Premium</li>
                <li>Annulez à tout moment</li>
              </ul>
              <div className="w-64 m-auto bg-red-200 rounded-3xl p-3 mb-4"><p className="text-black font-bold text-center">Essai gratuit de 1 Mois</p></div>
              <p className="text-xs">Gratuit pendant 1 mois, puis 10,99 € par mois. Offre uniquement disponible si vous n'avez jamais essayé Premium. Offre soumise à conditions.</p>
            </div>
          </div>
          {/* Premium étudiants */}
          <div className="w-11/12 lg:w-1/4 m-auto lg:mx-0 border-violet-300 border-2 rounded-md py-6 mb-4">
            <div className="w-48 bg-violet-300 text-black font-bold p-1 mx-2 mb-2 rounded-sm">Gratuit Pendant 2 Mois</div>
            <div className="mx-2 flex justify-between">
              <p className="w-1/2 text-2xl font-bold mb-2">Premium Etudiants</p>
              <div className="flex flex-col">
                <span className="uppercase font-bold text-xl">Gratuit</span>
                <span className="uppercase text-xs">Pour 2 mois</span>
              </div>
            </div>
            <div className="mx-4 flex flex-col">
              <ul className="mx-2 mb-20 list-disc">
                <li>1 compte Premium vérifié</li>
                <li>Réduction pour les étudiants et étudiantes éligibles</li>
                <li>Annulez à tout moment</li>
              </ul>
              <div className="w-64 m-auto bg-violet-300 rounded-3xl p-3 mb-4"><p className="text-black font-bold text-center">Essai gratuit de 2 mois</p></div>
              <p className="text-xs">Offre réservée aux personnes inscrites au sein d'un établissement d'enseignement supérieur accrédité. Offre soumise à conditions.</p>
            </div>
          </div>
          {/* Premium Famille */}
          <div className="w-11/12 lg:w-1/4 m-auto lg:mx-0 border-sky-200 border-2 rounded-md py-6 mb-4">
            
            <div className="mx-2 flex justify-between">
              <p className="w-1/2 text-2xl font-bold mb-2">Premium Famille</p>
              <div className="flex flex-col">
                <span className="font-bold text-xl">17,99 €</span>
                <span className="uppercase text-xs">Par mois</span>
              </div>
            </div>
            <div className="mx-4 flex flex-col">
              <ul className="mx-2 mb-28 list-disc">
                <li>1 compte Premium vérifié</li>
                <li>Réduction pour les étudiants et étudiantes éligibles</li>
                <li>Annulez à tout moment</li>
              </ul>
              <div className="w-64 m-auto bg-sky-200 rounded-3xl p-3 mb-4"><p className="text-black font-bold text-center">Obtenez Premium Famille</p></div>
              <p className="text-xs">Pour jusqu'à 6 membres d'une famille résidant à la même adresse. Offre soumise à conditions.</p>
            </div>
          </div>
        </div>
         {/* Premium Duo */}
         <div className="w-11/12 lg:w-1/4 m-auto border-yellow-300 border-2 rounded-md py-6 mb-4">
            <div className="mx-2 flex justify-between">
              <p className="w-1/2 text-2xl font-bold mb-2">Premium Duo</p>
              <div className="flex flex-col">
                <span className="font-bold text-xl">14,99 €</span>
                <span className="uppercase text-xs">Par mois</span>
              </div>
            </div>
            <div className="mx-4 flex flex-col">
              <ul className="mx-2 mb-8 list-disc">
                <li>2 comptes Spotify Premium</li>
                <li>Annulez à tout moment</li>
              </ul>
              <div className="w-64 m-auto bg-yellow-300 rounded-3xl p-3 mb-4"><p className="text-black font-bold text-center">Obtenez Premium Duo</p></div>
              <p className="text-xs">Pour les couples résidant à la même adresse. Offre soumise à conditions.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default subscriptions;