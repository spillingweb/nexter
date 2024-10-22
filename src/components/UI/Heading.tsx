import styles from "./Heading.module.scss";

type HeadingProps = {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  color?: "primary" | "light" | "dark";
  classes?: string;
};

const Heading = ({ level, children, color = "primary", classes }: HeadingProps) => {  
  const colorClass =
    color == "primary" ? styles.primary
      : color == "light" ? styles.light
      : styles.dark;

  const extraClasses = `${colorClass} ${classes ? classes : ''}`

  switch (level) {
    case 1:
      return <h1 className={`${styles.heading1} ${extraClasses}`}>{children}</h1>;
    case 2:
      return <h2 className={`${styles.heading2} ${extraClasses}`}>{children}</h2>;
    case 3:
      return <h3 className={`${styles.heading3} ${extraClasses}`}>{children}</h3>;
    case 4:
      return <h4 className={`${styles.heading4} ${extraClasses}`}>{children}</h4>;
    default:
      break;
  }
};

export default Heading;
