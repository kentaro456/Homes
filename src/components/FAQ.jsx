import React from 'react';

const faqs = [
  { question: "Savigny-le-Temple | Puis-je passer commande chez HOME'S et me faire livrer avec Uber Eats ?", answer: "Oui, HOME'S propose la livraison à domicile via Uber Eats dans la zone de Savigny-le-Temple et alentours." },
  { question: "L'établissement HOME'S propose-t-il la livraison près de chez moi ?", answer: "Vérifiez votre adresse sur Uber Eats pour savoir si la livraison est disponible dans votre secteur." },
  { question: "Savigny-le-Temple | Comment commander en ligne des articles de chez HOME'S ?", answer: "Rendez-vous sur Uber Eats, recherchez HOME'S, choisissez vos plats et validez votre commande en ligne." },
  { question: "Où puis-je trouver les prix du menu proposé par HOME'S en ligne ?", answer: "Tous les prix sont affichés sur notre site et sur Uber Eats lors de la commande." },
  { question: "Comment bénéficier des frais de livraison offerts pour ma commande passée chez HOME'S ?", answer: "Des offres promotionnelles sont régulièrement proposées sur Uber Eats. Consultez l'application pour en profiter." },
];

const FAQ = () => (
  <section id="faq-section" className="py-20 bg-white text-gray-800">
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2 drop-shadow">Questions fréquentes</h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-gold to-yellow-300 rounded-full mb-4" />
      </div>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-gray-50 border border-gold/10 rounded-xl p-6 shadow-sm">
            <div className="font-semibold text-gray-800 mb-2">{faq.question}</div>
            <div className="text-gray-600 text-base">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ; 