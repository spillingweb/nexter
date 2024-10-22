import styles from "./HomeItem.module.scss";
import { HomeType } from "../../data/homes";
import Icons from "../../assets/img/sprite.svg";
import Button from "../UI/Button";

interface HomeProps {
  home: HomeType;
}

const HomeItem = ({ home }: HomeProps) => {
  const formatter = new Intl.NumberFormat("en-US");
  const formattedPrice = formatter.format(home.price);

  return (
    <div className={styles.homeCard}>
      <img src={home.img} alt={home.title} className={styles.image} />
      <svg className={styles.like}>
        <use href={`${Icons}#icon-heart-full`}></use>
      </svg>
      <h5 className={styles.title}>{home.title}</h5>
      <div className={styles.features}>
        <div className={styles.featureItem}>
          <svg className={styles.icon}>
            <use href={`${Icons}#icon-map-pin`}></use>
          </svg>
          <span>{home.location}</span>
        </div>
        <div className={styles.featureItem}>
          <svg className={styles.icon}>
            <use href={`${Icons}#icon-profile-male`}></use>
          </svg>
          <span>{home.rooms} rooms</span>
        </div>
        <div className={styles.featureItem}>
          <svg className={styles.icon}>
            <use href={`${Icons}#icon-expand`}></use>
          </svg>
          <span>
            {home.area} m<sup>2</sup>
          </span>
        </div>
        <div className={styles.featureItem}>
          <svg className={styles.icon}>
            <use href={`${Icons}#icon-key`}></use>
          </svg>
          <span>&#36;{formattedPrice}</span>
        </div>
      </div>
      <Button>Contact Realtor</Button>
    </div>
  );
};

export default HomeItem;
