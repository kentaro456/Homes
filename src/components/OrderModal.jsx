import React from 'react';
import { motion } from 'framer-motion';

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-black">Commander en ligne</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4 mb-6">
          <p className="text-gray-600">Choisissez votre option de commande :</p>
          
          <div className="space-y-3">
            <button 
              onClick={() => window.open('https://www.ubereats.com', '_blank')}
              className="w-full p-4 border-2 border-green-500 text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span className="text-2xl">🚗</span>
              <span className="font-semibold">Uber Eats</span>
            </button>
            
            <button 
              onClick={() => window.open('https://www.deliveroo.fr', '_blank')}
              className="w-full p-4 border-2 border-teal-500 text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span className="text-2xl">🚴</span>
              <span className="font-semibold">Deliveroo</span>
            </button>
            
            <button 
              onClick={() => window.open('tel:+33164107790', '_blank')}
              className="w-full p-4 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span className="text-2xl">📞</span>
              <span className="font-semibold">Commander par téléphone</span>
            </button>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-all duration-300"
        >
          Fermer
        </button>
      </motion.div>
    </motion.div>
  );
};

export default OrderModal; 