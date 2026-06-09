export interface MenuCategory {
  id: string;
  label: string;
  menuImages: string[];
}

export const menuData: MenuCategory[] = [
  {
    id: "burgers",
    label: "Burgery",
    menuImages: [
      "/menu/burgery1.jpg",
      "/menu/burgery2.jpg",
    ],
  },
  {
    id: "lunch",
    label: "Lunch",
    menuImages: [
      "/menu/lunch1.jpg",
      "/menu/lunch2.jpg",
    ],
  },
  {
    id: "drinks",
    label: "Napoje & Kraft",
    menuImages: [
      "/menu/napoje1.jpg",
      "/menu/napoje2.jpg",
    ],
  },
];
