import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <li>
          <a href="#">Find your dream home</a>
        </li>
        <li>
          <a href="#">Request Proposal</a>
        </li>
        <li>
          <a href="#">Download home planner</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
        <li>
          <a href="#">Submit your property</a>
        </li>
        <li>
          <a href="#">Come work with us!</a>
        </li>
      </ul>
      <p className={styles.copyright}>
        &copy; Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        quisquam quae architecto et non eaque quaerat rerum, iusto tempora
        repudiandae, id iure quos nemo ea autem temporibus. Saepe, reiciendis.
        Earum.
      </p>
    </footer>
  );
};

export default Footer;
