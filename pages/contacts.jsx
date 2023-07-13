import Link from "next/link";
import DefaultLayout from "./layouts/defaultLayout";

export default function Contacts() {
  return (
    <>
      <DefaultLayout>
        <h1>Pagina contatti</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </DefaultLayout>
    </>
  );
}
