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
    {
      id: 5,
      name: "Locations Server side",
      value: "/SSRlocations",
    },
  ];

  return (
    <div className={styles.DefaultLayout}>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          min-height: 100vh;
        }
      `}</style>
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
