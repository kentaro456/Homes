import { useState } from 'react';

export const useOrder = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);

  const openOrderModal = () => {
    setShowOrderModal(true);
  };

  const closeOrderModal = () => {
    setShowOrderModal(false);
  };

  return {
    showOrderModal,
    openOrderModal,
    closeOrderModal
  };
}; 