import styles from "./index.module.scss";
import Link from "next/link";

const DefaultLayout = ({ children }) => {
  const links = [
    {
      id: 1,
      name: "Homepage",
      value: "/",
    },
    {
      id: 2,
      name: "About",
      value: "/about",
    },
    {
      id: 3,
      name: "Contatti",
      value: "/contacts",
    },
    {
      id: 4,
      name: "Locations",
      value: "/locations",
    },
  ];

  return (
    <div className={styles.DefaultLayout}>
      <div className={styles.navbar}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link className={styles.links} href={link.value}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <p>Made by Lorenzo Fraterrigo Garofalo</p>
      </div>
      <div className={styles.content}></div>
    </div>
  );
};

export default DefaultLayout;
