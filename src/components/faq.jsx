import React from 'react'
import faqData from "../data/faqData.json";

const faq = () => {
  return (
    <div className="bg-zinc-900 text-white py-2">
      <div className="faq-container w-2/3 m-auto">
        <h4 className="text-2xl lg:text-4xl font-bold mb-2 text-center">Des questions ?</h4>
        <p className="text-center mb-2">Nous avons les réponses.</p>
        <p className="text-center mb-4">Vous en trouverez encore plus <a href="https://support.spotify.com/fr/article/premium-plans/" className='underline'>ici.</a></p>
      </div>
      {faqData.map((q) => (
        <div className="collapse-container relative w-full lg:w-2/3 overflow-hidden m-auto mb-2">
          <input type="checkbox" className='peer h-12 w-12 absolute top-8 lg:top-5 right-3 opacity-0 cursor-pointer z-10'/>
          <div className="collapse-title bg-zinc-800 text-base lg:text-lg font-bold underline p-4"><p className="w-11/12 lg:w-full ">{q.question}</p></div>
          <div className="absolute top-8 lg:top-5 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

          </div>
          <div className="collapse-content bg-zinc-700 
          overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40"><p className="p-3">{q.answer}</p></div>
      </div>
      ))}
      
    </div>
  )
}

export default faq