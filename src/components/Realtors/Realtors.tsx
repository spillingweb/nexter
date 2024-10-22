import { DUMMY_REALTORS } from "../../data/realtors";
import Realtor from "./Realtor";
import styles from "./Realtors.module.scss";
import Heading from "../UI/Heading";

const Realtors = () => {
  return (
    <div id="realtors" className={styles.realtors}>
      <Heading level={3}>Top 3 realtors</Heading>
      <ul className={styles.realtorList}>
        {DUMMY_REALTORS.map((realtor) => (
          <Realtor
            key={realtor.name}
            img={realtor.img}
            name={realtor.name}
            housesSold={realtor.housesSold}
          />
        ))}
      </ul>
    </div>
  );
};

export default Realtors;