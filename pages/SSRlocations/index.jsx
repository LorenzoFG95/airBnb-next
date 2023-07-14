import styles from "../../styles/Locations.module.scss";
import Link from "next/link";
import DefaultLayout from "../layouts/defaultLayout";

import { useEffect, useState } from "react";

export default function Locations(props) {
  return (
    <DefaultLayout>
      <div className={styles.Products}>
        {" "}
        {props.data.map(
          ({ name, price, id, imageLocation, rating, availability }) => (
            <div
              className={`${styles.room} ${!availability && styles.full} `}
              key={id}
            >
              <h2>{name}</h2>
              <img src={imageLocation} alt={name} />
              <div className={styles.card__info}>
                <h3>{`${price} $`}</h3>
                <h3>{`${rating} /5 ⭐`}</h3>
              </div>
              <Link href={`/locations/${id}`}>
                <button>Prenota</button>
              </Link>
            </div>
          )
        )}
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/roomList");
  const data = res.status === 200 ? await res.json() : {};

  return {
    props: {
      data: data,
    },
  };
}
