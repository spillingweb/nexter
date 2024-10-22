import styles from "./FeatureItem.module.scss";
import { FeatureType } from "../../data/features";
import Icons from "../../assets/img/sprite.svg";
import Heading from "../UI/Heading";

const FeatureItem = ({ icon, title, text }: FeatureType) => {
  return (
    <div className={styles.feature}>
      <svg className={styles.featureIcon}>
        <use href={`${Icons}#icon-${icon}`}></use>
      </svg>
      <Heading level={4} color="dark">{title}</Heading>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default FeatureItem;
