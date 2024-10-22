import Realtor1 from "../assets/img/realtor-1.jpeg";
import Realtor2 from "../assets/img/realtor-2.jpeg";
import Realtor3 from "../assets/img/realtor-3.jpeg";

export type RealtorType = {
  img: string;
  name: string;
  housesSold: number;
};

export const DUMMY_REALTORS: RealtorType[] = [
  {
    img: Realtor1,
    name: "Erik Feinman",
    housesSold: 245,
  },
  {
    img: Realtor2,
    name: "Kim Brown",
    housesSold: 212,
  },
  {
    img: Realtor3,
    name: "Toby Ramsey",
    housesSold: 198,
  },
];
