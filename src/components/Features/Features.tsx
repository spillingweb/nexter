import { DUMMY_FEATURES } from "../../data/features";
import FeatureItem from "./FeatureItem";
import styles from "./Features.module.scss";

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      {DUMMY_FEATURES.map((feature) => (
        <FeatureItem
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </section>
  );
};

export default Features;
