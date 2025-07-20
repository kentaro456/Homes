// Utilitaires pour la gestion des commandes et réservations

// Fonction pour ouvrir les plateformes de commande
export const openOrderPlatform = (platform) => {
  const platforms = {
    ubereats: 'https://www.ubereats.com',
    deliveroo: 'https://www.deliveroo.fr',
    phone: 'tel:+33164107790'
  };
  
  if (platforms[platform]) {
    window.open(platforms[platform], '_blank');
  }
};

// Fonction pour afficher le modal de commande
export const showOrderModal = () => {
  // Cette fonction sera appelée par les composants pour déclencher l'affichage du modal
  const event = new CustomEvent('showOrderModal');
  window.dispatchEvent(event);
};



// Configuration des horaires d'ouverture
export const openingHours = {
  monday: { open: '11:30', close: '22:30' },
  tuesday: { open: '11:30', close: '22:30' },
  wednesday: { open: '11:30', close: '22:30' },
  thursday: { open: '11:30', close: '22:30' },
  friday: { open: '11:30', close: '23:00' },
  saturday: { open: '11:30', close: '23:00' },
  sunday: { open: '11:30', close: '22:30' }
};

// Fonction pour vérifier si le restaurant est ouvert
export const isRestaurantOpen = () => {
  const now = new Date();
  const currentDay = now.toLocaleDateString('fr-FR', { weekday: 'long' }).toLowerCase();
  const currentTime = now.toTimeString().slice(0, 5);
  
  const todayHours = openingHours[currentDay];
  if (!todayHours) return false;
  
  return currentTime >= todayHours.open && currentTime <= todayHours.close;
}; 