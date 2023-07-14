import styles from "../../styles/Locations.module.scss";
import Link from "next/link";
import DefaultLayout from "../layouts/defaultLayout";
// import { roomList } from "../../mocks/reservations";
import { useEffect, useState } from "react";

export default function Locations() {
  const [roomList, setRoomList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/roomList")
      .then((res) => res.json())
      .then((data) => {
        setRoomList(data);
      });
  }, []);

  if (roomList === []) {
    return <h1>Loading</h1>;
  } else {
    return (
      <DefaultLayout>
        <div className={styles.Products}>
          {" "}
          {roomList.map(({ name, price, id }) => (
            <div className={`${styles.room} `} key={id}>
              <h2>{name}</h2>
              <div className={styles.card__info}>
                <h3>{`${price} $`}</h3>
              </div>
              <Link href={`/locations/${id}`}>
                <button>Prenota</button>
              </Link>
            </div>
          ))}
        </div>
      </DefaultLayout>
    );
  }
}
