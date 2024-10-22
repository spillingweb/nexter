import styles from "./Button.module.scss";

type ButtonProps = {
  dark?: boolean;
  classes?: string;
  children: React.ReactNode;
};

const Button = ({ children, dark = false, classes }: ButtonProps) => {
  const colorClass = dark ? styles.dark : styles.light;

  const className = `${styles.button} ${colorClass} ${classes ? classes : ""}`;

  return <button className={className}>{children}</button>;
};

export default Button;
