import DefaultLayout from "../layouts/defaultLayout";
import { roomList } from "../../mocks/reservations";
import { useRouter } from "next/router";

export default function Location() {
  const router = useRouter().query.id;
  const locationData = roomList[parseInt(router) - 1];

  return (
    <DefaultLayout>
      <h1>{locationData.name}</h1>
      <h3>{locationData.description}</h3>
      <img src={locationData.imageLocation} alt={locationData.name} />
      <p>price: {locationData.price} $</p>
    </DefaultLayout>
  );
}
