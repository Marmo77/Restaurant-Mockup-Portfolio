export const siteData = {
  name: "Bistro Burger Szczecin",
  logo_full: "/logo-full.png",
  logo_nobg: "/logo-nobg.png",
  contact: {
    address: {
      street: "ul. Niezwykła 8",
      city: "Szczecin",
      zip: "70-002",
      full: "ul. Niezwykła 8, 70-002 Szczecin",
      googleMapsUrl:
        "https://www.google.com/maps?q=Szczecin",
    },
    phone: "510 378 629",
    email: "pub@bistroburger.pl",
  },
  hours: {
    monday: "Nieczynne",
    tuesday: "14:00 - 22:30",
    wednesday: "14:00 - 22:30",
    thursday: "14:00 - 22:30",
    friday: "13:00 - 00:00",
    saturday: "13:00 - 00:00",
    sunday: "13:00 - 22:00",
    display: [
      { day: "Poniedziałek", hours: "Nieczynne" },
      { day: "Wtorek - Czwartek", hours: "14:00 - 22:30" },
      { day: "Piątek - Sobota", hours: "13:00 - 00:00" },
      { day: "Niedziela", hours: "13:00 - 22:00" },
    ],
  },
  features: [
    "Płatność kartą",
    "Płatności cyfrowe",
    "Darmowe Wifi",
    "Krzesełka dla dzieci",
    "Ogródek piwny",
    "Parking",
    "Rezerwacje",
    "Siedziska",
    "Alkohol",
    "Parking uliczny",
    "Na wynos",
    "Dostęp dla wózków",
    "Wino i Piwo",
  ],
  links: {
    ordering:
      "https://www.pyszne.pl/menu/chmiel-do-uwolnienia-goleniow-nadrzeczna",
  },
  socials: {
    facebook: "https://www.facebook.com/chmieldouwolnienia",
    instagram: "https://www.instagram.com/chmieldouwolnienia/",
  },
  navItems: [
    { label: "Start", id: "start" },
    { label: "O Nas", id: "about" },
    { label: "Menu", id: "menu" },
    // { label: "Wydarzenia", id: "events" },
    { label: "Kontakt", id: "contact" },
  ],
};
