import Header from "./components/header";
import PremiumAdvantages from "./components/premiumAdvantages";
import Subscriptions from "./components/subscriptions";
import Faq from "./components/faq";
import Footer from "./components/footer";
import PlaylistsImg from "./assets/playlists.png";

function App() {
  return (
    <>
      <Header />
      <div className="home bg-gradient-to-bl from-red-200 via-neutral-700 to-zinc-900">
        <div className=" text-white">
          <div className="background w-full m-auto flex flex-col-reverse lg:flex-row lg:items-start">
            <div className="hook-container py-2 lg:py-8 m-auto">
              <div className="hook-text">
                <h1 className="text-3xl lg:text-4xl  font-bold mx-4 lg:mx-0 mobile:w-full lg:w-3/5 mb-2">
                  Profitez pleinement de votre musique avec Premium.
                </h1>
                <p className="text-xl lg:text-2xl mx-4 lg:mx-0 mobile:w-full lg:w-3/5 mb-2">
                  Ecoutez votre musique sans interruption avec Spotify Premium.
                </p>
                <p className="text-xl lg:text-2xl mx-4 lg:mx-0 mobile:w-full lg:w-3/5 mb-2">
                  À partir de 10,99 € seulement. Annulation possible à tout
                  moment.
                </p>
                <div className="call-to-action flex flex-col mobile:items-center lg:flex-row lg:space-x-3 py-5">
                  <div className="bg-red-200 rounded-3xl p-3 flex items-center mobile:mb-2 mobile:w-64">
                    <span className="text-black font-bold">
                      Obtenez Premium Personnel
                    </span>
                  </div>
                  <div className="bg-black border-2 border-white rounded-3xl p-3 mobile:mb-2 w-64 lg:w-80 mobile:text-center">
                    <span className="font-bold">
                      Voir tous les abonnements Premium
                    </span>
                  </div>
                </div>
                <p className="text-xs underline text-center lg:text-left">Offre soumise à conditions.</p>
              </div>
              
            </div>
            <div className="playlists-img flex flex-col">
                <img src={PlaylistsImg} className="w-full" alt="visuels playlists Spotify" />
              </div>
          </div>
        </div>
        <PremiumAdvantages />
        <Subscriptions />
        <Faq />
      </div>
      <Footer />
    </>
  );
}

export default App;