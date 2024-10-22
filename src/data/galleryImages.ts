import Image1 from "../assets/img/gal-1.jpeg";
import Image2 from "../assets/img/gal-2.jpeg";
import Image3 from "../assets/img/gal-3.jpeg";
import Image4 from "../assets/img/gal-4.jpeg";
import Image5 from "../assets/img/gal-5.jpeg";
import Image6 from "../assets/img/gal-6.jpeg";
import Image7 from "../assets/img/gal-7.jpeg";
import Image8 from "../assets/img/gal-8.jpeg";
import Image9 from "../assets/img/gal-9.jpeg";
import Image10 from "../assets/img/gal-10.jpeg";
import Image11 from "../assets/img/gal-11.jpeg";
import Image12 from "../assets/img/gal-12.jpeg";
import Image13 from "../assets/img/gal-13.jpeg";
import Image14 from "../assets/img/gal-14.jpeg";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
];

export type GalleryImage = {
  id: number;
  img: string;
};

export let DUMMY_GALLERY_IMAGES: GalleryImage[] = [];

for(let i=0; i<14; i++) {
    DUMMY_GALLERY_IMAGES.push({
        id: i,
        img: images[i]
    })
}