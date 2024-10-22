import Home1 from "../assets/img/house-1.jpeg";
import Home2 from "../assets/img/house-2.jpeg";
import Home3 from "../assets/img/house-3.jpeg";
import Home4 from "../assets/img/house-4.jpeg";
import Home5 from "../assets/img/house-5.jpeg";
import Home6 from "../assets/img/house-6.jpeg";

export type HomeType = {
  id: number;
  img: string;
  title: string;
  location: string;
  rooms: number;
  area: number;
  price: number;
};

export const DUMMY_HOMES: HomeType[] = [
  {
    id: 1,
    img: Home1,
    title: "Beautiful Family House",
    location: "USA",
    rooms: 5,
    area: 325,
    price: 1200000,
  },

  {
    id: 2,
    img: Home2,
    title: "Modern Glass Villa",
    location: "Canada",
    rooms: 6,
    area: 450,
    price: 2750000,
  },
  {
    id: 3,
    img: Home3,
    title: "Cozy Country House",
    location: "UK",
    rooms: 4,
    area: 250,
    price: 850000,
  },
  {
    id: 4,
    img: Home4,
    title: "Large Rustical Villa",
    location: "Portugal",
    rooms: 6,
    area: 480,
    price: 1950000,
  },
  {
    id: 5,
    img: Home5,
    title: "Majestic Palace House",
    location: "Germany",
    rooms: 18,
    area: 4230,
    price: 9500000,
  },
  {
    id: 6,
    img: Home6,
    title: "Modern Familiy Apartment",
    location: "Italy",
    rooms: 3,
    area: 180,
    price: 600000,
  },
];
