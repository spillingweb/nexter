import styles from "./GalleryImage.module.scss";

type ImageProps = {
  image: string;
  index: number;
};

const GalleryImage = ({ image, index}: ImageProps) => {
  
  return (
    <figure className={styles[`figure${index}`]}>
      <img className={styles.image} src={image} alt={`Gallery image ${index+1}`}/>
    </figure>
  );
};

export default GalleryImage;
