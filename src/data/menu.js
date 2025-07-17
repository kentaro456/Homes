export const menuData = {
  featuredItems: [
    {
      id: 1,
      name: "Le Home's Poulet",
      description: "Notre signature burger halal avec poulet grillé, sauce maison et légumes frais",
      price: "9,20 €",
      image: "/images/homes-poulet.jpg",
      category: "Signature"
    },
    {
      id: 2,
      name: "Pepsi Original",
      description: "Boisson gazeuse rafraîchissante, l'accompagnement parfait",
      price: "1,90 €",
      image: "/images/pepsi-33cl.jpg",
      category: "Boisson"
    },
    {
      id: 3,
      name: "Menu Double Saveur",
      description: "L'expérience complète avec deux saveurs uniques",
      price: "10,50 €",
      image: "/images/double-saveur.jpg",
      category: "Menu"
    },
    {
      id: 4,
      name: "7UP Mojito",
      description: "Saveur mojito rafraîchissante, sans alcool",
      price: "1,90 €",
      image: "/images/7up-mojito-33cl.jpg",
      category: "Boisson"
    }
  ],
  
  categories: {
    menus: [
      { name: "Menu Le Home's Poulet", price: "10,90 €" },
      { name: "Menu Le Home's Steak", price: "10,90 €" },
      { name: "Menu Le Torticheese", price: "10,90 €" },
      { name: "Menu Le Chicken Roll", price: "9,50 €" },
      { name: "Menu Le Spécial Steak", price: "10,90 €" },
      { name: "Menu Le Spécial Poulet", price: "10,90 €" },
      { name: "Menu Le Poulet Cheese", price: "9,50 €" },
      { name: "Menu Le Bœuf Burger", price: "9,50 €" },
      { name: "Menu Le Seekh Roll", price: "9,50 €" },
      { name: "Menu Double Saveur", price: "10,50 €" },
      { name: "Menu Wings (x10)", price: "9,50 €" }
    ],
    
    sandwiches: [
      { name: "Le Home's Poulet", price: "9,20 €" },
      { name: "Le Chicken Roll", price: "7,20 €" },
      { name: "Le Torticheese", price: "9,20 €" },
      { name: "Le Poulet Cheese", price: "7,20 €" },
      { name: "Le Spécial Steak", price: "9,20 €" },
      { name: "Le Triple Bœuf Burger", price: "7,20 €" },
      { name: "Le Spécial Poulet", price: "9,20 €" },
      { name: "Le Seekh Roll", price: "7,20 €" },
      { name: "Le Home's Steak", price: "9,20 €" }
    ],
    
    chicken: [
      { name: "Wings x10", price: "8,20 €" },
      { name: "Wings x20", price: "14,90 €" },
      { name: "Nuggets x10", price: "7,80 €" }
    ],
    
    sides: [
      { name: "Frites", price: "2,00 €" }
    ],
    
    desserts: [
      { name: "Tiramisu", price: "3,30 €" }
    ],
    
    drinks: [
      { name: "Bouteille Ice Tea pêche (1,5 L)", price: "3,30 €" },
      { name: "Pepsi (33 cl)", price: "1,90 €" },
      { name: "Bouteille Pepsi (1,5 L)", price: "3,30 €" },
      { name: "7 Up exotique (33 cl)", price: "1,90 €" },
      { name: "Ice Tea pastèque menthe (33 cl)", price: "1,90 €" },
      { name: "Ice Tea framboise (33 cl)", price: "1,90 €" },
      { name: "Pepsi Max (33 cl)", price: "1,90 €" },
      { name: "7 Up mojito (33 cl)", price: "1,90 €" },
      { name: "Ice Tea pêche (33 cl)", price: "1,90 €" },
      { name: "Mirinda (33 cl)", price: "1,90 €" },
      { name: "Bouteille 7 Up (1,5 L)", price: "3,30 €" },
      { name: "7 Up cherry (33 cl)", price: "1,90 €" },
      { name: "Eau minérale (33 cl)", price: "1,90 €" },
      { name: "7 Up (33 cl)", price: "1,90 €" }
    ]
  }
};

export const restaurantInfo = {
  name: "HOME'S",
  tagline: "Cuisine Halal Élevée au Rang d'Art",
  description: "Restaurant gastronomique halal à Savigny-le-Temple – Fast food haut de gamme.",
  address: "Savigny-le-Temple, France",
  phone: "+33 1 XX XX XX XX",
  hours: {
    weekdays: "11h30 - 14h30 • 18h30 - 22h30",
    weekend: "11h30 - 23h00"
  },
  paymentMethods: ["CB", "Espèces", "Swile", "Pluxee", "Ticket Restaurant"],
  delivery: ["Uber Eats", "Deliveroo", "Just Eat"],
  rating: 4.6,
  reviewCount: 8000
};