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
        <div className="Products">
          {" "}
          {roomList.map(({ name, price, id }) => (
            <div key={id}>
              <h2>{name}</h2>
              <h3>{`${price}Euro`}</h3>
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
