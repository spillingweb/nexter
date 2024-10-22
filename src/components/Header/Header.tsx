import styles from "./Header.module.scss";
import Button from "../UI/Button";
import Heading from "../UI/Heading";

import logoIcon from "../../assets/img/logo.png";
import BBCIcon from "../../assets/img/logo-bbc.png";
import ForbesIcon from "../../assets/img/logo-forbes.png";
import TCIcon from "../../assets/img/logo-techcrunch.png";
import BIIcon from "../../assets/img/logo-bi.png";

const Header = () => {
  return (
    <header id="header" className={styles.hero}>
      <img src={logoIcon} alt="logo nexter" className={styles.logo} />

      <Heading level={3}>Your own home:</Heading>
      <Heading level={1} color="light" classes="mb-md">
        The ultimate personal freedom
      </Heading>
      <Button classes={styles.button}>View our properties</Button>
      <div className={styles.seenOn}>Seen on</div>
      <div className={styles.seenOnLogos}>
        <img src={BBCIcon} alt="BBC icon" />
        <img src={ForbesIcon} alt="Forbes icon" />
        <img src={TCIcon} alt="Tech Crunch icon" />
        <img src={BIIcon} alt="Business Insider icon" />
      </div>
    </header>
  );
};

export default Header;
